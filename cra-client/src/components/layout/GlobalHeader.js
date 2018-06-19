
import React, { Component } from 'react'

import { ChevronDown } from 'react-feather'

import './GlobalHeader.css'


class GlobalHeader extends Component {

  render() {
    return (
      <header className="GlobalHeader container-fluid">
        <ul className="GlobalHeader-inner">
          <li>Students <ChevronDown /></li>
          <li>Staff <ChevronDown /></li>
          <li>Library</li>
        </ul>
      </header>
    )
  }

}

export default GlobalHeader
