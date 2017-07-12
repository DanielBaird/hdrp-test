import React, { Component } from 'react'

import NamesAndTitles from '../profile/NameAndTitles.js'
import ProjectAbstract from '../profile/ProjectAbstract.js'
import Biography from '../profile/Biography.js'
import MetricsSummary from '../profile/MetricsSummary.js'

/** 
 * OverviewSection is the stuff that goes into the Overview tab.
 */
class OverviewSection extends Component {
  render() {
    const pro = this.props.profile // ..for less typing
    return (
      <div className="OverviewSection">

        <NamesAndTitles profile={pro} />
        <ProjectAbstract profile={pro} />
        <Biography profile={pro} />
        <MetricsSummary profile={pro} />

      </div>
    )
  }
}

export default OverviewSection