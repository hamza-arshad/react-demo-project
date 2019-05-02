import React, { Component } from 'react';

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
              <li><p>{this.props.member.members}</p></li>
              <li className="subsection_category"><p>Telefon:</p></li>
              <li><p>{this.props.member.tel}</p></li>
              <li className="subsection_category"><p>Mobil:</p></li>
              <li><p>{this.props.member.mobile}</p></li>
              <li className="subsection_category"><p>Email:</p></li>
              <li><p>{this.props.member.email}</p></li>
            </ul>
          </li>

          <li className="subsection subsection_column">
            <ul>
              <li className="subsection_category"><p>Adresse:</p></li>
              <li><p>{this.props.member.street}</p></li>
              <li><p>{this.props.member.postcode} {this.props.member.city}</p></li>
              <li><p>{this.props.member.country}</p></li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default InformationTab