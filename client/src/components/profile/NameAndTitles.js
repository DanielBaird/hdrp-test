import React, { Component } from 'react'

import './NameAndTitles.css'

import Salutation from './Salutation.js'
import Suffix from './Suffix.js'

/** 
 * NameAndTitles renders a large name-and-title block.
 */
class NameAndTitles extends Component {
  render() {
    const pro = this.props.profile // ..for less typing
    return (
      <section className="NameAndTitles">
        <h1>
          <Salutation source={pro.salutation} format="long" className="sal" />
          {pro.first_name} {pro.surname}
        </h1>
        <Suffix source={pro.suffix} className="suffix" />
        <ul>
          <li><span className="staffonly">Professor</span><span className="bothonly"> and </span><span className="studentonly">Candidate for Doctor of Philosophy</span></li>
          <li><a href="#">College of Public Health, Medical &amp; Vet Sciences</a></li>
          <li><a href="#">Anton Breinl Research Centre for Health Systems Strengthening</a></li>
        </ul>        
      </section>
    )
  }
}

export default NameAndTitles