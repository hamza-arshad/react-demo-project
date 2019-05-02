import React, { Component } from 'react';
import InformationTab from './InformationTab'

import './ProfileBottom.css';

class ProfileBottom extends Component {

  render() {
    return (
      <div id="profile_bottom">
        <ul id="subsection_select">
          <li className="select_button"><span className="select_button_clicked">Allgemeine Infos</span></li>
          <li className="select_button"><span>Familie</span></li>
          <li className="select_button"><span>Körperschaft</span></li>
        </ul>

        <div id="subsection_wrapper">
          <InformationTab member={this.props.member}/>
        </div>
      </div>
    )
  }
}

export default ProfileBottom