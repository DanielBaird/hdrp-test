import React, { Component } from 'react'
import './Header.css'

/**
 * Header renders a (for now) static header.
 */
class Header extends Component {
  render() {
    return (
      <header className="Header container-fluid">
        <a className="jcubrand" href="#">
          <h1>Research Portfolio</h1>
        </a>
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
