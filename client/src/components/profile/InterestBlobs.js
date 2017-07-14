import React, { Component } from 'react'

import './InterestBlobs.css'

/** 
 * InterestBlobs renders a list of FoR codes.
 */
class InterestBlobs extends Component {
  render() {
    return (
      <section className="InterestBlobs">
        { this.props.areas && this.props.areas.length > 0 &&
            <ul className="blobs">
              { this.props.areas.map( area =>
                <li key={area.join('::')}>
                  <ul className="path">
                    { area.map( node =>
                      <li>{node}</li>
                    ) }
                  </ul>
                </li>
              ) }
            </ul>
        }
      </section>
    )
  }
}

export default InterestBlobs