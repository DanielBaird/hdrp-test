
import React, { Component } from 'react'

import './LinkFooter.css'


class LinkFooter extends Component {

  render() {

    const demoCategory = <div class="category">
                          <h3>About JCU</h3>
                          <ul>
                            <li><a href="">Facts and Figures</a></li>
                            <li><a href="">Campuses and Locations</a></li>
                          </ul>
                        </div>


    return (
      <footer class="LinkFooter clearfix">
        <div class="LinkFooter-inner">
          {demoCategory}
          {demoCategory}
          {demoCategory}
          {demoCategory}
          {demoCategory}
        </div>
      </footer>
    )
  }

}

export default LinkFooter
