import React, { Component } from 'react'

/** 
 * MetricsSummary renders a large name-and-title block.
 */
class MetricsSummary extends Component {
  render() {
    return (
      <section className="MetricsSummary">
        <ul>
          <li className="staffonly"><a className="" href="#"><span className="metric pubs">246</span> publications</a></li>
          <li className="staffonly"><a className="" href="#"><span className="metric">8</span> HDR students</a></li>
          <li className="staffonly"><a className="" href="#"><span className="metric money">248k</span> grant funding</a></li>

          <li className="studentonly"><a className="" href="#"><span className="metric completion">◕ 75%</span> complete</a></li>
        </ul>
      </section>
    )
  }
}

export default MetricsSummary