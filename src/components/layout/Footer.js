import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <div id="footer">
        <div id="footer_inner">
          <div id="footer_links">
            <ul>
              <li className="footer_links_title">Lorem ipsum 1</li>
              <li>Impressum</li>
              <li>Kontakt</li>
              <li>&Uuml;ber uns</li>
              <li>Datenschutz</li>
            </ul>
            <ul>
              <li className="footer_links_title">Lorem ipsum 2</li>
              <li>Lorem ipsum</li>
              <li>dolor sit amet consectetur</li>
              <li>adipiscing elit</li>
            </ul>
            <ul>
              <li className="footer_links_title">Lorem ipsum 3</li>
              <li>Lorem ipsum</li>
              <li>adipiscing elit</li>
              <li>dolor sit amet consectetur</li>
              <li>Lorem ipsum</li>
              <li>dolor sit amet</li>
            </ul>
          </div>
          <img src="img/logo_small.png" alt="" width="56" height="30" />
            <p id="copyright">&copy; Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
        </div>
      </div>
    )
  }
}

export default Footer