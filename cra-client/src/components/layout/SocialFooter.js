
import React, { Component } from 'react'

import * as Icon from 'react-feather'

import './SocialFooter.css'


class SocialFooter extends Component {

  render() {
    return (
      <footer class="SocialFooter">
        <span class="SocialFooter-head">Stay social #JCU</span>
        <ul class="SocialFooter-inner">
          <li><a><Icon.Facebook /></a></li>
          <li><a><Icon.Twitter /></a></li>
          <li><a><Icon.Youtube /></a></li>
          <li><a><Icon.Instagram /></a></li>
          <li><a><Icon.Linkedin /></a></li>
        </ul>
      </footer>
    )
  }

}

export default SocialFooter
