import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MemberItem.css';
import PropTypes from "prop-types";

class MemberItem extends Component {

  render() {
    return (
      <tr className="member">
        <td className="member_img"><img src={this.props.member.small_img} alt="" width="100%" height="" /></td>
        <td className="member_info">
          <div className="top_row">
            <h2><Link to={"/profile/" + this.props.member.id}>{this.props.member.name}</Link></h2>
            <div className="edit_members">
              <span><img src="img/wrench_icon.png" alt="" width="100%" height="" /></span>
              <span><img src="img/deactivate_icon.png" alt="" width="100%" height="" /></span>
              <span><img src="img/delete_member_icon.png" alt="" width="100%" height="" onClick={this.props.deleteMember.bind(this, this.props.member.id)} /></span>
            </div>
          </div>
          <div className="bottom_row">
            <ul>
              <li className="info_column general_info">
                <ul>
                  <li><span>Mitglieder: </span>{this.props.member.members}</li>
                  <li><span>Geschlecht: </span>{this.props.member.gender}</li>
                </ul>
              </li>
              <li className="info_column address">
                <ul>
                  <li><span>Straße&#47;Hausnr.: </span>{this.props.member.street}</li>
                  <li><span>PLZ: </span>{this.props.member.postcode}</li>
                  <li><span>Stadt: </span>{this.props.member.city}</li>
                  <li><span>Bundesland: </span>{this.props.member.state}</li>
                  <li><span>Land: </span>{this.props.member.country}</li>
                </ul>
              </li>
              <li className="info_column contact">
                <ul>
                  <li><span>Tel.: </span>{this.props.member.tel}</li>
                  <li><span>Mobil: </span>{this.props.member.mobile}</li>
                  <li><span>E-Mail: </span>{this.props.member.email}</li>
                </ul>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    )
  }
}

MemberItem.propTypes = {
  member: PropTypes.object.isRequired,
  deleteMember: PropTypes.func.isRequired
}

export default MemberItem