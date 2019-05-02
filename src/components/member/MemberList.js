import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MemberItem from './MemberItem'
import './MemberList.css';

class MemberList extends Component {

  render() {
    return (
        <React.Fragment>
          <div id="sub_header">
            <h1>Mitglieder</h1>
            <Link to={"/new_member"}><img src="img/new_member_icon.png" alt="" width="48" height="40" /></Link>
          </div>
          <div id="navigation">
            <form>
              <input type="text" placeholder="Mitglieder suchen" />
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
              {this.props.members.map((member) => {
                return <MemberItem key={member.id} member={member} deleteMember={this.props.deleteMember} />;
              })}
            </tbody>
          </table>
        </React.Fragment>
    )
  }
}

export default MemberList