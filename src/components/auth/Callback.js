import { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { getAndStoreParameters, getIdToken, isLoggedIn } from '../../services/AuthService';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Callback extends Component {

  componentDidMount() {
    console.log("This is callback component");
    var self = this;
    getAndStoreParameters(function () {
      self.createUser();
    });
  }

  createUser = () => {
    if (isLoggedIn()) {
      const variables = {
        accessToken: getIdToken()
      }
      this.props.createUser({variables})
        .then((response) => {
          console.log("Response from create user", response);
          localStorage.setItem('userId', response.data.authenticateUser.id);
          this.props.history.replace('/')
        }).catch((e) => {
        console.error("Error of life ", e)
        this.props.history.replace('/')
      })
    }
  }

  render() {
    return null;
  }
}

const createUser = gql`
  mutation ($accessToken: String!){
    authenticateUser(accessToken: $accessToken) {
      id
    }
  }
`

const userQuery = gql`
  query {
    user {
      id
    }
  }
`

export default graphql(createUser, {name: 'createUser'})(
  graphql(userQuery, { options: { fetchPolicy: 'network-only' }})(withRouter(Callback))
)