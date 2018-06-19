import React, { Component } from 'react'
import './NavHeader.css'

import logo from '../JCU-Logo-coloured.svg'

class NavHeader extends Component {

  static defaultProps = {
    title: ""
  }

  render() {

    // replace `\n` in the title with `<br>`s
    const titleList = this.props.title.split('\\n').reduce((list, current) => {
      if (list.length > 0) {
        return list.concat([<br />, current])
      }
      return list.concat([current])
    }, [])

    return (
      <nav className="NavHeader">
        <ul className="NavHeader-inner">
            <li><header>
              <a className="jcubrand" href="#">
                <img className="logo" src={logo} alt="James Cook University Australia logo" />
              </a>
              <a href="">
                <h1>{titleList}</h1>
              </a>
            </header></li>
            <li><a href="">nav link 2</a></li>
            <li><a href="">nav link 3</a></li>
            <li><a href="">nav link 4</a></li>
            <li className="search"><a href=""></a></li>
        </ul>
      </nav>
    )
  }

}

export default NavHeader
