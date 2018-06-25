
import React, { Component } from 'react'

import './FinePrintFooter.css'

import TSIFlag from './TSIFlag.svg'
import AAFlag from './AAFlag.svg'

import AFULogo from './AFULogo.svg'
import IRULogo from './IRULogo.svg'
import UALogo from './UALogo.svg'
import SotTLogo from './SotTLogo.svg'


class FinePrintFooter extends Component {

  render() {
    return (
      <footer class="FinePrintFooter clearfix">
        <div class="traditional">
          <div class="flag"><img src={AAFlag} /></div>
          <p>
            We acknowledge Australian Aboriginal People and
            Torres Strait Islander People as the first
            inhabitants of the nation, and acknowledge
            Traditional Owners of the lands where our staff
            and students live, learn and work.
          </p>
          <div class="flag"><img src={TSIFlag} /></div>
        </div>

        <div class="logos">
          <a href=""><img src={AFULogo} /></a>
          <a href=""><img src={IRULogo} /></a>
          <a href=""><img src={UALogo} /></a>
          <a href=""><img src={SotTLogo} /></a>
        </div>

        <ul class="copyright">
          <li>Copyright &copy; 1995 to 2018 James Cook University.</li>
          <li>All rights reserved.</li>
          <li>ABN 46253211955</li>
        </ul>

        <ul class="legal">
          <li><a href="">Feedback</a></li>
          <li><a href="">Terms of use</a></li>
          <li><a href="">Right to Information and Privacy</a></li>
          <li><a href="">CRICOS Provider Code: 00117J</a></li>
        </ul>

      </footer>

    )
  }



}

export default FinePrintFooter
