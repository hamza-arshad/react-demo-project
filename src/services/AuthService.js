import decode from 'jwt-decode';
import auth0 from 'auth0-js';
const ID_TOKEN_KEY = 'id_token';

const CLIENT_ID = 'NU0kF08txYUw9cywO1c17ihvvinf472W';
const CLIENT_DOMAIN = 'dev-9sim8cmk.auth0.com';
const REDIRECT = 'http://localhost:3000/callback';
const SCOPE = 'openid email profile';
const AUDIENCE = 'https://dev-9sim8cmk.auth0.com/userinfo';

var auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_DOMAIN
});

export function login() {
  auth.authorize({
    responseType: 'id_token',
    redirectUri: REDIRECT,
    audience: AUDIENCE,
    scope: SCOPE
  });
}

export function logout() {
  clearIdToken();
  clearProfile();
}

export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({pathname: '/'});
  }
}

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

function clearProfile() {
  localStorage.removeItem('profile');
  localStorage.removeItem('userId');
}

// Helper function that will allow us to extract the id_token
export function getAndStoreParameters(callback) {
  auth.parseHash(function(err, authResult) {
    if (err) {
      return console.log(err);
    }
    console.log("storing token");
    setIdToken(authResult.idToken);
    callback();
    console.log("stored token");
  });
}

export function getEmail() {
  var profile = getProfile();
  if(profile)
    return profile.email;
  return null;
}

export function getName() {
  var profile = getProfile();
  if(profile)
    return profile.nickname;
  return null;
}

// Get and store id_token in local storage
function setIdToken(idToken) {
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

export function getProfile() {
  var m_token = getIdToken();
  console.log(m_token);
  if(m_token) {
    const token = decode(m_token);
    return token;
  }
  return null;
}

function getTokenExpirationDate(encodedToken) {
  if(encodedToken) {
    const token = decode(encodedToken);
    if (!token.exp) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(token.exp);

    return date;
  }
  return null;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}