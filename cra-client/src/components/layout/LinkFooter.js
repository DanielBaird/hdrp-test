
import React, { Component } from 'react'

import './LinkFooter.css'


class LinkFooter extends Component {

  render() {

    const demoCategoryA = <div class="category"><h3>About JCU</h3>
                          <ul>
                            <li><a href="">Facts and Figures</a></li>
                            <li><a href="">Campuses and Locations</a></li>
                            <li><a href="">Organisational Structure</a></li>
                          </ul></div>

    const demoCategoryB = <div class="category"><h3>Contact Us</h3>
                          <ul>
                            <li><a href="">For Students</a></li>
                            <li><a href="">For Staff</a></li>
                          </ul></div>


    return (
      <footer class="LinkFooter clearfix">
        <div class="LinkFooter-inner">
          {demoCategoryA}
          {demoCategoryB}
          {demoCategoryA}
          {demoCategoryB}
          {demoCategoryA}
        </div>
      </footer>
    )
  }

}

export default LinkFooter
