import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MemberItem from './MemberItem'
import { graphql} from 'react-apollo'
import gql from 'graphql-tag'
import './MemberList.css';
import {isLoggedIn} from "../../services/AuthService";

class MemberList extends Component {

  state = {
    search: ''
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.allMembersQuery.refetch()
    }
  }

  onChange = (e) => {
    console.log("Just a test change handler");
    this.setState( {search: e.target.value} );
  }

  render() {
    if (this.props.allMembersQuery.loading) {
      return (
        <div className="loader">Loading...</div>
      )
    }
    return (
        <React.Fragment>
          <div id="sub_header">
            <h1>Mitglieder</h1>
            {
              (isLoggedIn())? <Link to={"/new_member"}><img src="img/new_member_icon.png" alt="" width="48" height="40" /></Link> : ''
            }
          </div>
          <div id="navigation">
            <form>
              <input type="text" name="search" value={this.state.search} onChange={this.onChange} placeholder="Mitglieder suchen" />
            </form>
            <div id="browse_pages">
              <ul>
                <li><span><img src="img/browse_icon.png" alt="" width="20" height="20" /></span></li>
                <li>Seite 1</li>
                <li><span><img src="img/browse_icon.png" alt="" width="20" height="20" /></span></li>
              </ul>
            </div>
          </div>

          <table id="members_table">
            <tbody>
              {this.props.allMembersQuery.allMembers && this.props.allMembersQuery.allMembers.map((member) => {
                return <MemberItem key={member.id} member={member} />;
              })}
            </tbody>
          </table>
        </React.Fragment>
    )
  }
}

const ALL_MEMBERS_QUERY = gql`
  query AllMembersQuery {
    allMembers {
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
      zipcode
      memberNumber
    }
  }
`

const ListMemberWithQuery = graphql(ALL_MEMBERS_QUERY, {
  name: 'allMembersQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(MemberList)

export default ListMemberWithQuery