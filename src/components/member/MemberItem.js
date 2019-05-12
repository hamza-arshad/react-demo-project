import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MemberItem.css';
import PropTypes from "prop-types";
import { graphql} from 'react-apollo'
import gql from 'graphql-tag'

class MemberItem extends Component {

  onDelete = async (id) => {
    console.log(id);
    await this.props.deleteMemberMutation({variables: {id}});
    this.props.history.replace('/');
  };

  render() {
    return (
      <tr className="member">
        <td className="member_img"><img src="/img/members/small/placeholder.jpg" alt="" width="100%" height="" /></td>
        <td className="member_info">
          <div className="top_row">
            <h2><Link to={"/profile/" + this.props.member.id}>{this.props.member.firstName + " " + this.props.member.lastName}</Link></h2>
            <div className="edit_members">
              <span><img src="img/wrench_icon.png" alt="" width="100%" height="" /></span>
              <span><img src="img/deactivate_icon.png" alt="" width="100%" height="" /></span>
              <span><img src="img/delete_member_icon.png" alt="" width="100%" height="" onClick={this.onDelete.bind(this, this.props.member.id)} /></span>
            </div>
          </div>
          <div className="bottom_row">
            <ul>
              <li className="info_column general_info">
                <ul>
                  <li><span>Mitglieder: </span>{this.props.member.memberNumber}</li>
                  <li><span>Geschlecht: </span>{this.props.member.sex}</li>
                </ul>
              </li>
              <li className="info_column address">
                <ul>
                  <li><span>Straße&#47;Hausnr.: </span>{this.props.member.streetNumber}</li>
                  <li><span>PLZ: </span>{this.props.member.zipcode}</li>
                  <li><span>Stadt: </span>{this.props.member.city}</li>
                  <li><span>Bundesland: </span>{this.props.member.region}</li>
                  <li><span>Land: </span>{this.props.member.country}</li>
                </ul>
              </li>
              <li className="info_column contact">
                <ul>
                  <li><span>Tel.: </span>{this.props.member.phone}</li>
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
  member: PropTypes.object.isRequired
};

const DELETE_MEMBER_MUTATION = gql`
  mutation DeleteMemberMutation($id: ID!) {
    deleteMember(id: $id) {
      id
    }
  }
`;

const DeleteMemberWithMutation = graphql(DELETE_MEMBER_MUTATION, {name: 'deleteMemberMutation'})(MemberItem);
export default withRouter(DeleteMemberWithMutation)
