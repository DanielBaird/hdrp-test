import React, { Component } from 'react'
import './Header.css'

/** 
 * Header renders a (for now) static header.
 */
class Header extends Component {
  render() {
    return (
      <header className="Header container-fluid jcu-header">
        <div className="col-xs-6">
          <a className="text-inverse jcubrand" href="#">
            <img className="jcu-footer__brand-img" src="https://web.jcu.io/dist/images/jcua-logo-mono-reversed.svg" alt="James Cook University Australia logo" />
            Research Portfolio
          </a>
        </div>
        <div className="col-xs-6 text-xs-right">
          <input value="" autoComplete="off" className="search-bar-input" placeholder="Search for topics or researchers" name="q" type="text" />
          or
          <a className="btn btn-primary">Explore</a>
          <a className="login" href="#">Log in</a>
        </div>
      </header>
    )
  }
}

export default Header