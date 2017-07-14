import React, { Component } from 'react'
import logo from './logo.svg'

import './vendor/jcu-framework/css/jcu.css'
import './App.css'

import PresentationSwitcher from './components/meta/PresentationSwitcher.js'
import Header from './components/layout/Header.js'
import Navbar from './components/layout/Navbar.js'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import Avatar from './components/avatar/Avatar.js'
import ProfileLinks from './components/profile/ProfileLinks.js'

import OverviewSection from './components/tabs/OverviewSection.js'

class App extends Component {
  // ----------------------------------------------------------------
  state = {
    profile: {}
  }
  // ----------------------------------------------------------------
  constructor() {
    super();
    this.getData();
  }
  // ----------------------------------------------------------------
  getData() {
    return fetch('/api/researcher.json', {
     accept: 'application/json',
    })
    .then(response => response.json())
    .then(json => {
      // got json here..
      console.log(json.meta, json.data)
      this.setState({profile: json.data})
    });
  }
  // ----------------------------------------------------------------
  render() {
    console.log('rendering')
    return (
<div>
  <PresentationSwitcher />
  <Header />
  <Navbar />

  <div className="container">
    <div className="row">

      {/* left column ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className="col-sm-3 p-t-3">

        <Avatar url={this.state.profile.avatar_url} />
        <ProfileLinks profile={this.state.profile} />

      </div>

      {/* right column ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className="detailcol col-sm-8 p-t-3 p-l-3">

         <Tabs>

        {/* 
        This is what this would look like if we wanted to use Bootstrap styling:

        <Tabs disabledTabClassName="disabled" selectedTabClassName="active">
          <TabList className="nav nav-pills m-b-3">
            <Tab className="nav-item nav-link">Overview</Tab>
        */}

          <TabList className="react-tabs__tab-list m-b-3">
            <Tab>Overview</Tab>
            <Tab>Honours</Tab>
            <Tab>Works</Tab>
            <Tab>Funding</Tab>
            <Tab>Supervision</Tab>
            <Tab>Experience<br />&amp; Teaching</Tab>
          </TabList>

          <TabPanel>
            <OverviewSection profile={this.state.profile} />
          </TabPanel>
          <TabPanel> 





            <div className="tab honours">
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <section className="shortname">
                  <h1><span className="staffonly">Professor </span>Peter Leggatt</h1>
                  <span className="quals staffonly">
                      AM, BMedSc MB BS <i>Qld</i>, MMedEd <i>Dundee</i>, MPH MHSc(AvMed) <i>Otago</i>, PhD <i>SAust</i>, DrPH <i>JCU</i>, MD <i>Qld</i>, FAFPHM, FFPH <i>RCP(UK)</i>, FPHAA, FACTM, FACAsM, FFTM FFEWM <i>ACTM</i>, FFTM <i>RCPSG</i>, FACRRM, FISTM, FSIA, FACE, FAICD, FRAS, FRGS, Hon.FFPM <i>RCP(UK)</i>, Hon.FACTM, Hon.FFTM <i>ACTM</i>, WSO-CSE/CSM/CSS(OSH)/CSSD, ChOHSP, MRO
                  </span>
              </section>
              <section className="awards">
                <ul>
                  <li className="honour even">
                    2016 - Commander of the Order of St John, Commonwealth of Australia Gazette No. C2016G01262
                  </li>
                  <li className="honour odd">
                    2016 - Australia Day Ambassador, Queensland, National Australia Day Council
                  </li>
                  <li className="honour even">
                    2015 - Australia Day Ambassador, Queensland, National Australia Day Council
                  </li>
                  <li className="honour odd">
                    2014 - Australia Day Ambassador, Queensland, National Australia Day Council
                  </li>
                  <li className="honour even">
                    2014 - Glenn E. Hudson International Award, World Safety Organization
                  </li>
                  <li className="honour odd">
                    2013 - Member of the Order of Australia, Commonwealth of Australia Gazette No. C2013G00848
                  </li>
                </ul>
              </section>
            </div>{/* /.honours */}
          </TabPanel>
          <TabPanel>
          <div className="tab works">
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <section className="shortname">
                <h1><span className="staffonly">Professor </span>Peter Leggatt</h1>
                <span className="quals staffonly">
                    AM, BMedSc MB BS <i>Qld</i>, MMedEd <i>Dundee</i>, MPH MHSc(AvMed) <i>Otago</i>, PhD <i>SAust</i>, DrPH <i>JCU</i>, MD <i>Qld</i>, FAFPHM, FFPH <i>RCP(UK)</i>, FPHAA, FACTM, FACAsM, FFTM FFEWM <i>ACTM</i>, FFTM <i>RCPSG</i>, FACRRM, FISTM, FSIA, FACE, FAICD, FRAS, FRGS, Hon.FFPM <i>RCP(UK)</i>, Hon.FACTM, Hon.FFTM <i>ACTM</i>, WSO-CSE/CSM/CSS(OSH)/CSSD, ChOHSP, MRO
                </span>
            </section>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <section className="pubsummary"><span className="display-4">246</span> publications since 2000</section>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <section className="journal-articles">
              <ul>
                <li className="publication even">
                  Peden A, <a href="http://jcu.me/richard.franklin">Franklin R</a> and Leggat P (2016) <a href="http://researchonline.jcu.edu.au/42224" rel="#pb_5" className="link-overlay" style={{"cursor": "pointer"}}><em>Fatal river drowning: the identification of research gaps through a systematic literature review.</em></a> Injury Prevention, 22 (3). pp. 202-209
                </li>
                <li className="publication odd">
                  <div data-badge-popover="right" data-badge-type="donut" data-doi="10.1017/dmp.2016.3" data-hide-no-mentions="true" data-link-target="_blank" className="altmetric altmetric-embed altmetric-hidden" data-uuid="d7482be0-3a48-4171-8cb7-e91c6f893bec"></div>
                  Ryan B, <a href="http://jcu.me/richard.franklin">Franklin R</a>, <a href="http://jcu.me/frederick.burkle">Burkle F</a>, <a href="http://jcu.me/kerrianne.watt">Watt K</a>, Aitken P, <a href="http://jcu.me/erin.smith">Smith E</a> and Leggat P (2016) <a href="http://researchonline.jcu.edu.au/45283" rel="#pb_6" className="link-overlay" style={{"cursor": "pointer"}}><em>Defining, describing, and categorizing public health infrastructure priorities for tropical cyclone, flood, storm, tornado, and tsunami-related disasters.</em></a> Disaster Medicine and Public Health Preparedness, 10 (4). pp. 598-610
                </li>
                <li className="publication even">
                  Aitken P, <a href="http://jcu.me/richard.franklin">Franklin R</a>, Lawlor J, Mitchell R, <a href="http://jcu.me/kerrianne.watt">Watt K</a>, <a href="http://jcu.me/jeremy.furyk1">Furyk J</a>, Small N, Lovegrove L and Leggat P (2015) <a href="http://researchonline.jcu.edu.au/39334" rel="#pb_7" className="link-overlay" style={{"cursor": "pointer"}}><em>Emergency department presentations following tropical cyclone Yasi.</em></a> PLoS ONE, 10 (6). pp. 1-12
                </li>
                <li className="publication odd">
                  Leggat P (2015) <a href="http://researchonline.jcu.edu.au/37437" rel="#pb_8" className="link-overlay" style={{"cursor": "pointer"}}><em>Medical tourism.</em></a> Australian Family Physician, 44 (1). pp. 16-21
                </li>
              </ul>
            </section>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <section className="chapters">
              <ul>
                <li className="publication even">
                  <div data-badge-popover="right" data-badge-type="donut" data-doi="10.1371/currents.dis.62e9286d152de04799644dcca47d9288" data-hide-no-mentions="true" data-link-target="_blank" className="altmetric altmetric-embed altmetric-hidden" data-uuid="e7957326-b3a3-a44e-f75f-0c8e04758edb"></div>
                  Ryan B, <a href="http://jcu.me/richard.franklin">Franklin R</a>, <a href="http://jcu.me/frederick.burkle">Burkle F</a>, Aitken P, <a href="http://jcu.me/erin.smith">Smith E</a>, <a href="http://jcu.me/kerrianne.watt">Watt K</a> and Leggat P (2015) <a href="http://researchonline.jcu.edu.au/42186" rel="#pb_9" className="link-overlay" style={{"cursor": "pointer"}}><em>Identifying and describing the impact of cyclone, storm and flood related disasters on treatment management, care and exacerbations of non-communicable diseases and the implications for public health.</em></a> PLoS Currents Disasters, 28 September 2015.
                </li>
                <li className="publication odd">
                  Ryan B, <a href="http://jcu.me/richard.franklin">Franklin R</a>, <a href="http://jcu.me/frederick.burkle">Burkle F</a>, <a href="http://jcu.me/kerrianne.watt">Watt K</a>, Aitken P, <a href="http://jcu.me/erin.smith">Smith E</a> and Leggat P (2015) <a href="http://researchonline.jcu.edu.au/37438" rel="#pb_10" className="link-overlay" style={{"cursor": "pointer"}}><em>Analyzing the impact of Severe Tropical Cyclone Yasi on public health infrastructure and the management of noncommunicable Diseases.</em></a> Prehospital and Disaster Medicine, 30 (1). pp. 28-37
                </li>
                <li className="publication even">
                  <a href="http://jcu.me/richard.franklin">Franklin R</a>, <a href="http://jcu.me/jemma.king">King J</a>, Aitken P and Leggat P (2014) <a href="http://researchonline.jcu.edu.au/35392" rel="#pb_11" className="link-overlay" style={{"cursor": "pointer"}}><em>"Washed away" - assessing community perceptions of flooding and prevention strategies: a North Queensland example.</em></a> Natural Hazards, 73 (3). pp. 1977-1998
                </li>
                <li className="publication odd">
                  <div data-badge-popover="right" data-badge-type="donut" data-doi="10.1123/ijare.2013-0030" data-hide-no-mentions="true" data-link-target="_blank" className="altmetric altmetric-embed altmetric-hidden" data-uuid="1900f03f-b584-e234-ca49-b82722414286"></div>
                  <a href="http://jcu.me/richard.franklin">Franklin R</a>, <a href="http://jcu.me/jemma.king">King J</a>, <a href="http://jcu.me/kerrianne.watt">Watt K</a>, Aitken P and Leggat P (2014) <a href="http://researchonline.jcu.edu.au/33042" rel="#pb_12" className="link-overlay" style={{"cursor": "pointer"}}><em>Media, risk, and prevention: lessons for aquatic safety from newsworthy deaths: precipice for prevention or just good tales?</em></a> International Journal of Aquatic Research and Education, 8 (2). pp. 182-194
                </li>
              </ul>
            </section>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <section className="more">
              To see these publications and more, visit <a href="#">ResearchOnline@JCU</a>.
            </section>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <section className="pubsummary"><span className="display-4">10</span> datasets stored in ResearchData</section>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <section className="datasets">
              <ul>
                <li>
                  Storlie, C. (2016) <a href="https://research.jcu.edu.au/researchdata/published/detail/c1f78626e7f23a54533162605b61c1db/" rel="#pb_24" className="link-overlay" style={{"cursor": "pointer"}}><em>CRU Monthly Average Climate Time Series (1901 - 2014): Mapped climate data with global extent at 30 arcminute resolution</em></a>. James Cook University
                </li>
                <li>
                  Storlie, C. (2016) <a href="https://research.jcu.edu.au/researchdata/published/detail/932dac4dac626181e2bf697daf19966b/" rel="#pb_25" className="link-overlay" style={{"cursor": "pointer"}}><em>CRUCLIM 30-year Average Bioclimate Time Series (1915 - 1995): Mapped climate data with global extent at 30 arcminute resolution</em></a>. James Cook University
                </li>
                <li>
                  Storlie, C. (2016) <a href="https://research.jcu.edu.au/researchdata/published/detail/8094d08d937534312c5a0a05264766c4/" rel="#pb_26" className="link-overlay" style={{"cursor": "pointer"}}><em>accuCLIM Daily Weather Time Series: Accurate, high-resolution, mapped weather data for the Australian Wet Tropics World Heritage Area</em></a>. James Cook University
                </li>
                <li>
                  Storlie, C. (2016) <a href="https://research.jcu.edu.au/researchdata/published/detail/3982b9988548fba95a4c181608f3a87d/" rel="#pb_27" className="link-overlay" style={{"cursor": "pointer"}}><em>accuCLIM Monthly Average Climate Time Series: Accurate, high-resolution, mapped climate data for the Australian Wet Tropics World Heritage Area</em></a>. James Cook University
                </li>
              </ul>
            </section>
          </div>
          </TabPanel>
          <TabPanel>
            <div className="tab funding">
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <section className="shortname">
                  <h1><span className="staffonly">Professor </span>Peter Leggatt</h1>
                  <span className="quals staffonly">
                      AM, BMedSc MB BS <i>Qld</i>, MMedEd <i>Dundee</i>, MPH MHSc(AvMed) <i>Otago</i>, PhD <i>SAust</i>, DrPH <i>JCU</i>, MD <i>Qld</i>, FAFPHM, FFPH <i>RCP(UK)</i>, FPHAA, FACTM, FACAsM, FFTM FFEWM <i>ACTM</i>, FFTM <i>RCPSG</i>, FACRRM, FISTM, FSIA, FACE, FAICD, FRAS, FRGS, Hon.FFPM <i>RCP(UK)</i>, Hon.FACTM, Hon.FFTM <i>ACTM</i>, WSO-CSE/CSM/CSS(OSH)/CSSD, ChOHSP, MRO
                  </span>
              </section>
              <section className="grants">
                <h1>Travel Health Advisory Group - ACTM Research Grant</h1>
                <h2>Travel Health - Deaths, antimalarial prescriptions and Website</h2>
                <dl><dt>Indicative Funding</dt>
                  <dd>$35,630 over 2 years
                  </dd>
                  <dt>Summary</dt>
                  <dd>On average each year 300 international travellers die while in Australia. This study aims to update (2006-2012) the previous research (1997-2000 and 2001-2003) on traveller deaths in Australia. There is also a dearth of information about deaths of children travellers and trauma related travellers deaths. Information from the Australian Bureau of Statistics (ABS) cause of death information will be utilised to describe travellers deaths 2006-2012.
                    Malaria continues to represent a significant risk for some travellers from Australia and malaria chemoprophylaxis has remained an important countermeasure. Trends in antimalarial use may be influenced by a number of factors, including the availability of antimalarials, increasing resistance, the issuing of updated guidelines for malaria chemoprophylaxis, and continuing education. The aim of this study is to investigate the trends in prescription of antimalarial drugs, particularly those recommended for chemoprophylaxis in Australia, from 2009 to 2013 and to update the last study covering the period 2005 to 2009.</dd>
                  <dt>Investigators</dt>
                  <dd><a href="http://jcu.me/richard.franklin">Richard Franklin</a> and Peter Leggat
                    (College of Public Health and Medical &amp; Vet Sciences)</dd>

                  <dt>Keywords</dt>
                  <dd>Travel Medicine; Death; Malaria; Travel Health; Antimalarials</dd>
                </dl>
              </section>
            </div>{/* /.honours */}
          </TabPanel>
          <TabPanel>
            <div className="tab supervision">
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <section className="shortname">
                  <h1><span className="staffonly">Professor </span>Peter Leggatt</h1>
                  <span className="quals staffonly">
                      AM, BMedSc MB BS <i>Qld</i>, MMedEd <i>Dundee</i>, MPH MHSc(AvMed) <i>Otago</i>, PhD <i>SAust</i>, DrPH <i>JCU</i>, MD <i>Qld</i>, FAFPHM, FFPH <i>RCP(UK)</i>, FPHAA, FACTM, FACAsM, FFTM FFEWM <i>ACTM</i>, FFTM <i>RCPSG</i>, FACRRM, FISTM, FSIA, FACE, FAICD, FRAS, FRGS, Hon.FFPM <i>RCP(UK)</i>, Hon.FACTM, Hon.FFTM <i>ACTM</i>, WSO-CSE/CSM/CSS(OSH)/CSSD, ChOHSP, MRO
                  </span>
              </section>
              <section className="current">
                <ul>
                  <li className="supervision even">
                    <a href="http://researchonline.jcu.edu.au/39063" rel="#pb_16" className="link-overlay" style={{"cursor": "pointer"}}> Making salient messages for Indigenous tobacco control </a>
                    <span className="discreet">
                      (2015, PhD, Associate Advisor)
                    </span>
                  </li>
                  <li className="supervision odd">
                    <a href="http://researchonline.jcu.edu.au/43767" rel="#pb_17" className="link-overlay" style={{"cursor": "pointer"}}> Developing disaster health preparedness in Australia </a>
                    <span className="discreet">
                      (2015, PhD, Primary Advisor)
                    </span>
                  </li>
                  <li className="supervision even">
                    <a href="http://researchonline.jcu.edu.au/29749" rel="#pb_18" className="link-overlay" style={{"cursor": "pointer"}}> Tafenoquine in the prophylaxis and treatment of malaria in Australian Defence Force personnel </a>
                    <span className="discreet">
                      (2011, PhD, Primary Advisor)
                    </span>
                  </li>
                </ul>
              </section>
            </div>{/* /.supervision */}
          </TabPanel>
          <TabPanel>
            <div className="tab experience">
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <section className="shortname">
                  <h1><span className="staffonly">Professor </span>Peter Leggatt</h1>
                  <span className="quals staffonly">
                      AM, BMedSc MB BS <i>Qld</i>, MMedEd <i>Dundee</i>, MPH MHSc(AvMed) <i>Otago</i>, PhD <i>SAust</i>, DrPH <i>JCU</i>, MD <i>Qld</i>, FAFPHM, FFPH <i>RCP(UK)</i>, FPHAA, FACTM, FACAsM, FFTM FFEWM <i>ACTM</i>, FFTM <i>RCPSG</i>, FACRRM, FISTM, FSIA, FACE, FAICD, FRAS, FRGS, Hon.FFPM <i>RCP(UK)</i>, Hon.FACTM, Hon.FFTM <i>ACTM</i>, WSO-CSE/CSM/CSS(OSH)/CSSD, ChOHSP, MRO
                  </span>
              </section>
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <section className="teaching">
                  <ul>
                      <li>
                          <a href="https://secure.jcu.edu.au/app/studyfinder/?subject=TM5501" rel="#pb_20">TM5501</a>
                          Tropical Medicine 
                          <span className="discreet">(Level 5; TSV)</span>
                      </li>
                      <li>
                          <a href="https://secure.jcu.edu.au/app/studyfinder/?subject=TM5502" rel="#pb_21">TM5502</a>
                          Tropical Public Health 
                          <span className="discreet">(Level 5; TSV)</span>
                      </li>
                      <li>
                          <a href="https://secure.jcu.edu.au/app/studyfinder/?subject=TM5503" rel="#pb_22">TM5503</a>
                          Human Parasitology 
                          <span className="discreet">(Level 5; CNS)</span>
                      </li>
                      <li>
                          <a href="https://secure.jcu.edu.au/app/studyfinder/?subject=TM5512" rel="#pb_23">TM5512</a>
                          Travel Medicine 
                          <span className="discreet">(Level 5; TSV)</span>
                      </li>
                      <li>
                          <a href="https://secure.jcu.edu.au/app/studyfinder/?subject=TM5540" rel="#pb_24">TM5540</a>
                          Public Health and the Workplace 
                          <span className="discreet">(Level 5; TSV)</span>
                      </li>
                      <li>
                          <a href="https://secure.jcu.edu.au/app/studyfinder/?subject=TM5557" rel="#pb_25">TM5557</a>
                          Disaster Health Management 
                          <span className="discreet">(Level 5; TSV)</span>
                      </li>
                      <li>
                          <a href="https://secure.jcu.edu.au/app/studyfinder/?subject=TM5563" rel="#pb_26">TM5563</a>
                          Public Health Leadership and Crisis Management 
                          <span className="discreet">(Level 5; TSV)</span>
                      </li>
                      <li>
                          <a href="https://secure.jcu.edu.au/app/studyfinder/?subject=TM5581" rel="#pb_27">TM5581</a>
                          Expedition and Wilderness Medicine 
                          <span className="discreet">(Level 5; TSV)</span>
                      </li>
                  </ul>

              </section>
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            </div>
          </TabPanel>
        </Tabs>
  </div>




</div></div>

<footer className="p-y-2 bg-inverse text-inverse">
  <section className="logo">
    <p><a className="text-inverse" href="#"><img className="jcu-footer__brand-img" src="https://web.jcu.io/dist/images/jcua-logo-mono-reversed.svg" alt="James Cook University Australia logo" /></a></p>
  </section>
  <section className="navigate">
    <ul>
      <li><a href="#">Centres</a></li>
      <li><a href="#">Institutes</a></li>
      <li><a href="#">College Profiles</a></li>
      <li><a href="#">jcu.me</a></li>
    </ul>
  </section>
  <section className="connect">
    <ul>
      <li><a href="#">Find an Advisor</a></li>
      <li><a href="#">Research Students</a></li>
      <li><a href="#">Collaboration</a></li>
      <li><a href="#">Search</a></li>
    </ul>
  </section>
  <section className="about">
    <ul>
      <li><a href="#">What is the Research Portfolio?</a></li>
      <li><a href="#">New Features</a></li>
      <li><a href="#">Help Guide</a></li>
      <li><a href="#">About Content</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </section>
    <p><a className="text-inverse page-scroll" href="#page-top"><span className="icon-chevronup" aria-hidden="true"></span> Back to top</a></p>
</footer>

      {/*<div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          {this.state.avatarUrl}
        </p>

        <Avatar url={this.state.avatarUrl} />
      </div>*/}
</div>
    );
  }
}

export default App
