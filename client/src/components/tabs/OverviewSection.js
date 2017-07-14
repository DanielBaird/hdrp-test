import React, { Component } from 'react'

import NamesAndTitles from '../profile/NameAndTitles'
import InterestBlobs from '../profile/InterestBlobs'
import ProjectAbstract from '../profile/ProjectAbstract'
import Biography from '../profile/Biography'
import MetricsSummary from '../profile/MetricsSummary'

/** 
 * OverviewSection is the stuff that goes into the Overview tab.
 */
class OverviewSection extends Component {
  render() {
    const pro = this.props.profile // ..for less typing
    return (
      <div className="OverviewSection">

        <NamesAndTitles profile={pro} />
        <InterestBlobs areas={pro.research_areas} />
        <ProjectAbstract profile={pro} />
        <Biography profile={pro} />
        <MetricsSummary profile={pro} />

      </div>
    )
  }
}

export default OverviewSection