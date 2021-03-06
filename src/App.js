import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MemberList from './components/member/MemberList';
import MemberProfile from './components/member/MemberProfile';
import NewMember from './components/member/NewMember';

import './App.css';
import Callback from "./components/auth/Callback";
import {requireAuth} from "./services/AuthService";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div id="container">
            <Route exact path="/" render={props => (
              <MemberList {...props} />
            )} />
            <Route path="/profile/:id" render={props => (
              <MemberProfile {...props}/>
            )} />
            <Route path="/new_member" onEnter={requireAuth} render={props => (
              <NewMember {...props} />
            )}/>
            <Route path="/callback" render={props => (
              <Callback {...props} />
            )}/>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
