import React, { Component } from 'react';
import './NewMember.css';
import PropTypes from "prop-types";

class NewMember extends Component {

  state = {
    newUser: {
      name: '',
      lastname: '',
      members: '',
      gender: '',
      street: '',
      postcode: '',
      city: '',
      state: '',
      country: '',
      tel: '',
      mobile: '',
      email: '',
      title: 'Mr.',
      small_img: '/img/members/small/placeholder.jpg',
      big_img: '/img/members/big/placeholder.jpg',
      ranking: 10
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addMember(this.state.newUser);
    this.setState({newUser: {
        name: '',
        lastname: '',
        members: '',
        gender: '',
        street: '',
        postcode: '',
        city: '',
        state: '',
        country: '',
        tel: '',
        mobile: '',
        email: '',
        title: 'Mr.',
        small_img: '/img/members/small/placeholder.jpg',
        big_img: '/img/members/big/placeholder.jpg',
        ranking: 10
      }});
  }

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
            <input type="text" name="members" value={this.state.newUser.members} onChange={this.onChange} placeholder="Mitgliedsnummer eingeben" />
          </div>

          <div id="personal_info" className="form_row">
            <div>
              <h2>Titel</h2>
              <input type="text" name="title" value={this.state.newUser.title} onChange={this.onChange} placeholder="Titel eingeben" />
            </div>

            <div>
              <h2>Geschlecht</h2>
              <input type="text" name="gender" value={this.state.newUser.gender} onChange={this.onChange} placeholder="Geschlecht eingeben" />
            </div>

            <div>
              <h2>Vorname</h2>
              <input type="text" name="name" value={this.state.newUser.name} onChange={this.onChange} placeholder="Vorname eingeben" />
            </div>

            <div>
              <h2>Familienname</h2>
              <input type="text" name="lastname" value={this.state.newUser.lastname} onChange={this.onChange} placeholder="Familienname eingeben" />
            </div>
          </div>

          <div id="contact_info" className="form_row">
            <div>
              <h2>Telefonnummer</h2>
              <input type="text" name="tel" value={this.state.newUser.tel} onChange={this.onChange} placeholder="Telefonnummer eingeben" />
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
              <input type="text" name="street" value={this.state.newUser.street} onChange={this.onChange} placeholder="Straße/Hausnummer eingeben" />
            </div>

            <div>
              <h2>PLZ</h2>
              <input type="text" name="postcode" value={this.state.newUser.postcode} onChange={this.onChange} placeholder="PLZ eingeben" />
            </div>

            <div>
              <h2>Stadt</h2>
              <input type="text" name="city" value={this.state.newUser.city} onChange={this.onChange} placeholder="Stadt eingeben" />
            </div>

            <div>
              <h2>Bundesland</h2>
              <input type="text" name="state" value={this.state.newUser.state} onChange={this.onChange} placeholder="Bundesland eingeben" />
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

NewMember.propTypes = {
  addMember: PropTypes.func.isRequired
}

export default NewMember