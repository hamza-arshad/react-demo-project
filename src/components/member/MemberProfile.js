import React, { Component } from 'react';
import ProfileBottom from './profile_info_tabs/ProfileBottom'
import { graphql} from 'react-apollo'
import gql from 'graphql-tag'
import './MemberProfile.css';

class MemberProfile extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {this.props.memberQuery(props.match.params.id)};
  // }

  render() {
    if (this.props.memberQuery.loading) {
      return (
        <div className='flex w-100 h-100 items-center justify-center pt7'>
          <div>
            Loading
            (from {process.env.REACT_APP_GRAPHQL_ENDPOINT})
          </div>
        </div>
      )
    }

    const {Member} = this.props.memberQuery
    return (
      <React.Fragment>
        <div id="portrait_and_name">
          <div id="portrait">
            <div><img src="/img/members/big/placeholder.jpg" alt="" width="90%" height="" /></div>
            <ul id="options">
              <li>
                <span className="options_button"><img src="/img/image_icon.png" alt="" width="" height="" /></span>
                <p><span>Bild ändern</span></p>
              </li>
              <li>
                <span className="options_button"><img src="/img/wrench_gray_icon.png" alt="" width="" height="" /></span>
                <p><span>Profil bearbeiten</span></p>
              </li>
            </ul>
          </div>

          <div id="name">
            <h1>{Member.firstName}</h1>
            <p><span>Ranking:</span> {Member.ranking} / 10</p>
            <p><span>Erstellung:</span> {Member.createdAt.slice(0,10)}</p>
          </div>
        </div>

        <ProfileBottom member={Member}/>

      </React.Fragment>
    )
  }
}

const MEMBER_QUERY = gql`
  query MemberQuery($id: ID!) {
    Member(id: $id) {
      id
      firstName
      lastName
      phone
      mobile
      email
      region
      country
      city
      streetNumber
      sex
      ranking
      zipcode
      memberNumber
      createdAt
    }
  }
`

const MemberProfileWithQuery = graphql(MEMBER_QUERY, {
  name: 'memberQuery',
  options: ({match}) => ({
    variables: {
      id: match.params.id,
    }
  }),
})(MemberProfile)

export default MemberProfileWithQuery