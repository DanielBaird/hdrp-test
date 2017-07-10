
import React, { Component } from 'react'
import './PresentationSwitcher.css'

class PresentationSwitcher extends Component {
  render() {
    return (
      <div className="PresentationSwitcher">
        <button id="btn-student">student</button>
        <button id="btn-staff">staff</button>
        <button id="btn-both">both</button>
      </div>
    )
  }
}

export default PresentationSwitcher
