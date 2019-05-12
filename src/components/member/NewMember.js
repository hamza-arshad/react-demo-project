import React, { Component } from 'react';
import './NewMember.css';
import { withRouter } from 'react-router-dom'
import { graphql} from 'react-apollo'
import gql from 'graphql-tag'

class NewMember extends Component {

  state = {
    newUser: {
      firstName: '',
      lastName: '',
      memberNumber: '',
      sex: '',
      streetNumber: '',
      zipcode: '',
      city: '',
      region: '',
      country: '',
      phone: '',
      mobile: '',
      email: '',
      title: 'Mr.',
      small_img: '/img/members/small/placeholder.jpg',
      big_img: '/img/members/big/placeholder.jpg',
      ranking: 10
    }
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const {firstName, lastName, memberNumber, sex, zipcode, streetNumber, city, region, country, phone, mobile, email, title, ranking} = this.state.newUser;
    await this.props.createMemberMutation({variables: {firstName, lastName, memberNumber, sex, streetNumber, zipcode, city, region, country, phone, mobile, email, title, ranking}});
    this.props.history.replace('/');
  };

  onChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState( prevState => {
        return {
          newUser : {
            ...prevState.newUser, [name]: value
          }
        }
      }
    )
  };

  render() {
    return (
      <React.Fragment>
        <div id="sub_header">
          <h1>Neues Mitglied</h1>
        </div>
        <form id="new_member_form" onSubmit={this.onSubmit}>
          <div id="member_number">
            <h2>Mitgliedsnummer</h2>
            <input type="text" name="memberNumber" value={this.state.newUser.memberNumber} onChange={this.onChange} placeholder="Mitgliedsnummer eingeben" />
          </div>

          <div id="personal_info" className="form_row">
            <div>
              <h2>Titel</h2>
              <input type="text" name="title" value={this.state.newUser.title} onChange={this.onChange} placeholder="Titel eingeben" />
            </div>

            <div>
              <h2>Geschlecht</h2>
              <input type="text" name="sex" value={this.state.newUser.sex} onChange={this.onChange} placeholder="Geschlecht eingeben" />
            </div>

            <div>
              <h2>Vorname</h2>
              <input type="text" name="firstName" value={this.state.newUser.firstName} onChange={this.onChange} placeholder="Vorname eingeben" />
            </div>

            <div>
              <h2>Familienname</h2>
              <input type="text" name="lastName" value={this.state.newUser.lastName} onChange={this.onChange} placeholder="Familienname eingeben" />
            </div>
          </div>

          <div id="contact_info" className="form_row">
            <div>
              <h2>Telefonnummer</h2>
              <input type="text" name="phone" value={this.state.newUser.phone} onChange={this.onChange} placeholder="Telefonnummer eingeben" />
            </div>

            <div>
              <h2>Mobilnummer</h2>
              <input type="text" name="mobile" value={this.state.newUser.mobile} onChange={this.onChange} placeholder="Mobilnummer eingeben" />
            </div>

            <div>
              <h2>Email</h2>
              <input type="text" name="email" value={this.state.newUser.email} onChange={this.onChange} placeholder="Email eingeben" />
            </div>
          </div>

          <div id="address_info" className="form_row">
            <div>
              <h2>Straße &amp; Hausnummer</h2>
              <input type="text" name="streetNumber" value={this.state.newUser.streetNumber} onChange={this.onChange} placeholder="Straße/Hausnummer eingeben" />
            </div>

            <div>
              <h2>PLZ</h2>
              <input type="text" name="zipcode" value={this.state.newUser.zipcode} onChange={this.onChange} placeholder="PLZ eingeben" />
            </div>

            <div>
              <h2>Stadt</h2>
              <input type="text" name="city" value={this.state.newUser.city} onChange={this.onChange} placeholder="Stadt eingeben" />
            </div>

            <div>
              <h2>Bundesland</h2>
              <input type="text" name="region" value={this.state.newUser.region} onChange={this.onChange} placeholder="Bundesland eingeben" />
            </div>
            <div>
              <h2>Land</h2>
              <input type="text" name="country" value={this.state.newUser.country} onChange={this.onChange} placeholder="Land eingeben" />
            </div>
          </div>
          <input id="new_member_submit" type="submit" name="send" value="Speichern" />
        </form>
      </React.Fragment>
    )
  }
}

const CREATE_MEMBER_MUTATION = gql`
  mutation CreateMemberMutation($firstName: String!, $lastName: String!, $memberNumber: String!, $sex: String!, $streetNumber: String!, $zipcode: String!, $city: String!, $region: String!, $country: String!, $phone: String!, $mobile: String!, $email: String!, $title: String!, $ranking: Float!) {
    createMember(firstName: $firstName, lastName: $lastName, memberNumber: $memberNumber, sex: $sex, streetNumber: $streetNumber, zipcode: $zipcode, city: $city, region: $region, country: $country, phone: $phone, mobile: $mobile, email: $email, title: $title, ranking: $ranking) {
      id
      firstName
      lastName
      memberNumber
      sex
      streetNumber
      zipcode
      city
      region
      country
      phone
      mobile
      email
      title
      ranking
    }
  }
`;

const NewMemberWithMutation = graphql(CREATE_MEMBER_MUTATION, {name: 'createMemberMutation'})(NewMember)
export default withRouter(NewMemberWithMutation)