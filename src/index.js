import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HttpLink} from "apollo-link-http";
import ApolloClient from "apollo-client/ApolloClient";
import {InMemoryCache} from "apollo-cache-inmemory";
import {ApolloProvider} from "react-apollo";

const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjvjbf1nm1ugy0149js9zy7es' });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root'));

serviceWorker.unregister();
