import React, { Component } from 'react';
import Menu from './Menu'
import {Link, withRouter} from 'react-router-dom';
import { login, logout, isLoggedIn } from '../../services/AuthService';

import './Header.css';

class Header extends Component {

  state = {
    show_menu: false
  }

  toggleMenu = () => {
    this.setState({show_menu: !this.state.show_menu})
  }

  render() {
    let menu_classes = this.state.show_menu? 'menu_visible':'';
    return (
      <React.Fragment>
        <Menu addClasses={menu_classes} toggleMenu={this.toggleMenu} />
        <div id="header">
          <div id="header_inner">
            <div id="column">
              <div id="column_content"></div>
              <div id="tip"></div>
            </div>

            <div id="header_content">
              <Link to={"/"} ><img src="/img/logo.png" alt="" width="351" height="79" /></Link>
                <div id="header_stuff">
                  <ul>
                    <li>
                      <img src="/img/hamburger_icon.png" alt="" width="15" height="15" />
                      <span onClick={this.toggleMenu}>Men&uuml;</span>
                    </li>
                    <li>
                      <img src="/img/login_icon.png" alt="" width="15" height="15" />
                      {
                        (isLoggedIn())? (<span onClick={() => {logout(); this.props.history.replace("/");}}>Log out </span> ) : ( <span onClick={() => login()}>Log In</span> )
                      }
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(Header)