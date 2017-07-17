import React, { Component } from 'react'

import './InterestBlobs.css'

/** 
 * InterestBlobs renders a list of FoR codes.
 */
class InterestBlobs extends Component {
  render() {
    if (this.props.areas && this.props.areas.length > 0) {
      return (
        <section className="InterestBlobs">
          Interested in:
          <ul className="blobs">
            { this.props.areas.map( area =>
              <li key={area.join('::')}>
                <ul className="path">
                  { area.map( node =>
                    <li key={node}>{node}</li>
                  ) }
                </ul>
              </li>
            ) }
          </ul>
        </section>

      )
    } else {
      return null
    }
  }
}

export default InterestBlobs