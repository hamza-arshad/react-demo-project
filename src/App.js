import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MemberList from './components/member/MemberList';
import MemberProfile from './components/member/MemberProfile';
import NewMember from './components/member/NewMember';

import './App.css';

class App extends Component {

  state = {
    members: [{
      id: 1,
      name: 'Aubrey Plaza',
      lastname: '',
      title: 'Ms.',
      members: 1234567890,
      gender: 'female',
      street: 'Schlossstraße 109C',
      postcode: 10602,
      city: 'Berlin',
      state: 'Berlin',
      country: 'Germany',
      tel: '030/123456',
      mobile: '01510 12345678',
      email: 'plaza@gmail.com',
      small_img: '/img/members/small/aubrey_plaza.jpg',
      big_img: '/img/members/big/aubrey_plaza.jpg',
      ranking: 8.5,
      created_at: Date().toString().slice(0,10).replace(/-/g,"")
    }, {
      id: 2,
      name: 'Al Pacino',
      lastname: '',
      title: 'Ms.',
      members: 1234567890,
      gender: 'male',
      street: 'Friedrichstraße 9',
      postcode: 10602,
      city: 'Berlin',
      state: 'Berlin',
      country: 'Germany',
      tel: '030/123456',
      mobile: '01510 12345678',
      email: 'pacino@gmail.com',
      small_img: '/img/members/small/al_pacino.jpg',
      big_img: '/img/members/big/al_pacino.jpg',
      ranking: 6.5,
      created_at: Date().toString().slice(0,10).replace(/-/g,"")
    }],
    nextId: 3
  };

  deleteMember = (id) => {
    this.setState({members: this.state.members.filter(member => {
        if(id !== member.id) {
          return member;
        }
        return null;
      })
    });
  };

  addMember = (member) => {
    member.id = this.state.nextId;
    member.created_at = Date().toString().slice(0,10).replace(/-/g,"");
    this.setState({members: [...this.state.members, member], nextId: this.state.nextId+1})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div id="container">
            <Route exact path="/" render={props => (
              <MemberList members={this.state.members} deleteMember={this.deleteMember}/>
            )} />
            <Route path="/profile/:id" render={props => (
              <MemberProfile {...props} members={this.state.members}/>
            )} />
            <Route path="/new_member" render={props => (
              <NewMember addMember={this.addMember} />
            )}/>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
