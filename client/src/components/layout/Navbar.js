import React, { Component } from 'react'
import './Navbar.css'

/** 
 * Navbar renders a (for now) static navbar.
 */
class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <ul className="nav nav-tabs nav-dark bg-inverse">
            <li className="nav-item"><a href="" className="nav-link">nav link 1</a></li>
            <li className="nav-item"><a href="" className="nav-link active">nav link 2</a></li>
            <li className="nav-item"><a href="" className="nav-link">nav link 3</a></li>
            <li className="nav-item"><a href="" className="nav-link">nav link 4</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar