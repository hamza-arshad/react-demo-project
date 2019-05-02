import React, { Component } from 'react';

import './Menu.css';

class Menu extends Component {

  render() {
    return (
      <ul id="menu" className={this.props.addClasses}>
        <li className="menu_column_1">
          <ul>
            <li><span>Start</span></li>
            <li><span>Links</span></li>
            <li><span>Lorem ipsum Lorem</span></li>
          </ul>
        </li>
        <li className="menu_column_2">
          <ul className="menu_inner_1">
            <li className="menu_title">Mitglieder</li>
            <li><span>Lorem ipsum</span></li>
            <li><span>Lorem ipsum</span></li>
            <li><span>Lorem ipsum</span></li>
          </ul>
          <ul className="menu_inner_2">
            <li className="menu_title">Körperschaften</li>
            <li><span>Lorem ipsum</span></li>
            <li><span>Lorem ipsum</span></li>
          </ul>
          <ul className="menu_inner_3">
            <li className="menu_title">Lorem lorem</li>
            <li><span>Lorem ipsum</span></li>
            <li><span>Lorem ipsum</span></li>
          </ul>
        </li>
        <li id="close_menu" className="menu_column_last">
          <span onClick={this.props.toggleMenu}>X</span>
        </li>
      </ul>
    )
  }
}

export default Menu