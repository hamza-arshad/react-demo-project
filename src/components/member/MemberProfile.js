import React, { Component } from 'react';
import ProfileBottom from './profile_info_tabs/ProfileBottom'
import './MemberProfile.css';
import PropTypes from "prop-types";

class MemberProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      member: props.members.filter((value) => value.id === Number.parseInt(props.match.params.id))[0]
    };
    ;debugger;
  }

  render() {
    return (
      <React.Fragment>
        <div id="portrait_and_name">
          <div id="portrait">
            <div><img src={this.state.member.big_img} alt="" width="90%" height="" /></div>
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
            <h1>{this.state.member.name}</h1>
            <p><span>Ranking:</span> {this.state.member.ranking} / 10</p>
            <p><span>Erstellung:</span> {this.state.member.created_at}</p>
          </div>
        </div>

        <ProfileBottom member={this.state.member}/>

      </React.Fragment>
    )
  }
}

MemberProfile.propTypes = {
  members: PropTypes.array.isRequired
}

export default MemberProfile