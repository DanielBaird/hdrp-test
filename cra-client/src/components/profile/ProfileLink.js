import React, { Component } from 'react'
import './ProfileLink.css'

/** 
 * ProfileLink renders a single profile-related link.
 */
class ProfileLink extends Component {
  render() {
    // make props.type into a className that starts with `pl-` and is all lowercase letters.
    const className = 'pl-' + this.props.type.toLowerCase().replace(/[^a-z]/, '')
    return (
      <li className="ProfileLink"><a className={className} href={this.props.url} title={this.props.type}>{this.props.text}</a></li>
    )
  }
}

export default ProfileLink