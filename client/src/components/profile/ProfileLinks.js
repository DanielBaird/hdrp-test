import React, { Component } from 'react'
import './ProfileLinks.css'

import ProfileLink from './ProfileLink.js'

/** 
 * ProfileLinks renders a column of profile related links.
 */
class ProfileLinks extends Component {
  render() {
    const pro = this.props.profile // ..for less typing
    return (
      <div className="ProfileLinks">
        <section className="primary_ids">
          <ul>
            { pro.orcid && 
              <ProfileLink type="orcid" url={"https://orcid.org/" + pro.orcid} text={pro.orcid} />
            }
            { pro.supervision_level &&
              <ProfileLink type="advisor" url="#" text="Advisor Mentor" />
            }
            { pro.supervision_level &&
              <ProfileLink type="researchteam" url="https://www.jcu.edu.au/graduate-research-school/prospective-students/make-an-enquiry" text="Join my research team" />
            }
           <ProfileLink type="contact" url="#" text="Contact me" />
 
          </ul>
        </section>

        { pro.external_ids &&
          <section className="external_ids">
            <ul>
              { pro.external_ids.map( extId =>
                <ProfileLink type={extId.type} url={extId.url} text={extId.text} key={extId.url} />
              ) }
            </ul>
          </section>
        }
      </div>
    )
  }
}

export default ProfileLinks