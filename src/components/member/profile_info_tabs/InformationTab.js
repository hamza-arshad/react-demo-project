import React, { Component } from 'react';
import PropTypes from "prop-types";

class InformationTab extends Component {

  render() {
    return (
      <div>
        <ul className="subsection_header">
          <li className="subsection_column">Lorem ipsum</li>
          <li className="subsection_column">Zur Person</li>
          <li className="subsection_column">Persönliche Details</li>
        </ul>

        <ul className="subsection_content">
          <li className="subsection subsection_column">
            <ul>
              <li><p>blabla.com</p></li>
              <li><p>blabla.com</p></li>
              <li><p>blabla.com</p></li>
            </ul>
          </li>

          <li className="subsection subsection_column">
            <ul>
              <li className="subsection_category"><p>Mitgliedsnummer:</p></li>
              <li><p>{this.props.member.memberNumber}</p></li>
              <li className="subsection_category"><p>Telefon:</p></li>
              <li><p>{this.props.member.phone}</p></li>
              <li className="subsection_category"><p>Mobil:</p></li>
              <li><p>{this.props.member.mobile}</p></li>
              <li className="subsection_category"><p>Email:</p></li>
              <li><p>{this.props.member.email}</p></li>
            </ul>
          </li>

          <li className="subsection subsection_column">
            <ul>
              <li className="subsection_category"><p>Adresse:</p></li>
              <li><p>{this.props.member.streetNumber}</p></li>
              <li><p>{this.props.member.zipcode} {this.props.member.city}</p></li>
              <li><p>{this.props.member.country}</p></li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

InformationTab.propTypes = {
  member: PropTypes.object.isRequired
}

export default InformationTab