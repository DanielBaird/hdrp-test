import React, { Component } from 'react'

/** 
 * Suffix renders a Suffix in a given format.
 */
class Suffix extends Component {
  render() {
    const html = { __html: this.props.source }
    return (
      <p className={this.props.className} dangerouslySetInnerHTML={html} />
    )
  }
}

export default Suffix