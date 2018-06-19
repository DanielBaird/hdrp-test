import React, { Component } from 'react'
import './Avatar.css'

/** 
 * Avatar draws an image of the person or thing.
 * Expects a prop called `url` which is the URL of the image.
*/
class Avatar extends Component {
  render() {
    return (
      <div className="Avatar">
          <img src={this.props.url} alt="logo" />
      </div>
    )
  }
}

export default Avatar