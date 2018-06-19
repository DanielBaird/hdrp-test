import React, { Component } from 'react'
import './Navbar.css'

import logo from '../JCU-Logo-coloured.svg'


/**
 * Navbar renders a (for now) static navbar.
 */
class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <ul className="navbar-inner">
            <li><a className="jcubrand" href="#">
              <img className="logo" src={logo} alt="James Cook University Australia logo" />
            </a></li>
            <li><a href="" className="active">Research Portfolio</a></li>
            <li><a href="">nav link 2</a></li>
            <li><a href="">nav link 3</a></li>
            <li><a href="">nav link 4</a></li>
            <li className="search"><a href=""></a></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
