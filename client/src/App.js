import React, { Component } from 'react'
import logo from './logo.svg'

// import './App.css'
import './vendor/jcu-framework/css/jcu.css'

import Avatar from './components/avatar/Avatar.js'
import PresentationSwitcher from './components/meta/PresentationSwitcher.js'
import Header from './components/layout/Header.js'
import Navbar from './components/layout/Navbar.js'

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
    return fetch('/api/full.json', {
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
      <div className="col-sm-3">

        <Avatar url={this.state.profile.avatar_url} />

        <section className="primary_ids">
          <ul>
            <li>
              <a className="orcid" href="#">0000-0123-4567-8901</a>
            </li><li>
              <a className="advisor staffonly" href="#"><span className="icon-asterisk" aria-hidden="true"></span> Advisor Mentor</a>
            </li><li>
              <a className="connect" href="#"><span className="icon-asterisk" aria-hidden="true"></span> Connect with me</a>
            </li><li>
              <a className="join" href="#"><span className="icon-friends" aria-hidden="true"></span> Join my research team</a>
            </li>
          </ul>
        </section>

        <section className="external_ids">
          <ul>
            <li><a className="twitter" href="#">@Leggat_Peter</a></li>
            <li><a className="website" href="#">example.edu.au</a></li>
            <li><a className="academia" href="#">academia.edu</a></li>
            <li><a className="researchgate" href="#">ResearchGate</a></li>
            <li><a className="conversation" href="#">The Conversation</a></li>
            <li><a className="scholar" href="#">Google Scholar</a></li>
            <li><a className="scopus" href="#">Scopus</a></li>
          </ul>
        </section>

      </div>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

      <div className="detailcol col-sm-8">
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <nav className="infonav">
            <ul>
                <li className="current"><a href="#overview">Overview</a></li>
                <li><a href="#honours">Honours</a></li>
                <li><a href="#works">Works</a></li>
                <li className="staffonly"><a href="#funding">Funding</a></li>
                <li className="staffonly"><a href="#supervision">Supervision</a></li>
                <li><a href="#experience">Experience<br />&amp; Teaching</a></li>
            </ul>
        </nav>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <div className="tab overview">
          <section className="name-assoc">
              <h1><span className="staffonly">Professor</span>Peter Leggatt</h1>
              <p className="staffonly">
                  AM, BMedSc MB BS <i>Qld</i>, MMedEd <i>Dundee</i>, 
                  MPH MHSc(AvMed) <i>Otago</i>, PhD <i>SAust</i>, 
                  DrPH <i>JCU</i>, MD <i>Qld</i>, FAFPHM, FFPH <i>RCP(UK)</i>, 
                  FPHAA, FACTM, FACAsM, FFTM FFEWM <i>ACTM</i>, 
                  FFTM <i>RCPSG</i>, FACRRM, FISTM, FSIA, FACE, FAICD, 
                  FRAS, FRGS, Hon.FFPM <i>RCP(UK)</i>, Hon.FACTM, 
                  Hon.FFTM <i>ACTM</i>, WSO-CSE/CSM/CSS(OSH)/CSSD, 
                  ChOHSP, MRO
              </p>
              <ul>
                  <li><span className="staffonly">Professor</span><span className="bothonly"> and </span><span className="studentonly">Candidate for Doctor of Philosophy</span></li>
                  <li><a href="#">College of Public Health, Medical &amp; Vet Sciences</a></li>
                  <li><a href="#">Anton Breinl Research Centre for Health Systems Strengthening</a></li>
              </ul>        
              <ul className="blobs">
                  <li>Public Health and Health Sciences</li>
                  <li>Clinical Sciences</li>
              </ul>        
          </section>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          <section className="project studentonly">
            <b>Using regional geographic scale substitution to value coastal wildlife tourism: implications for stakeholders, conservation and management</b>
            <br />
            D'Lima C, Welters R, Hamann M and Marsh H
            <p className="shorten">
              Professor Leggat graduated in medical science and medicine from the University of Queensland. He undertook postgraduate studies at various universities, including Mahidol University, the University of Dundee and the University of Otago, before completing doctorates at the University of South Australia and James Cook University and a higher doctorate at the University of Queensland. He has also specialised in General Practice, Public Health Medicine and Aerospace Medicine. As part of a Fulbright Scholarship, he completed the Primary Care Faculty Development Fellowship Program at Michigan State University. A current Fulbright Ambassador, his research encompasses a broad range of topics including occupational health issues for health care workers, public health aspects of disasters, and health and safety concerns for travellers. He has published  >500 journal papers (>4000 citations; h-index=31; i10-index=119), and >90 chapters, as well as >35 books, directories and proceedings. His most recently published textbook is Essential Travel Medicine (Wiley Blackwell, Oxford, UK, 2015). He has presented >350 papers at national and international conferences. 
            </p>
          </section>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          <section className="bio shorten staffonly">

            <p>Professor Peter A. Leggat, AM, is Professor and Deputy Dean in the <a href="https://www.jcu.edu.au/college-of-public-health-medical-and-veterinary-sciences" target="_blank">College of Public Health, Medical and Veterinary Sciences</a>, Division of Tropical Health and Medicine, <a href="http://www.jcu.edu.au" target="_blank">James Cook University</a> (JCU), Australia. He has a strong interest in health workforce development in public health and tropical medicine, but also in related areas such as aerospace and travel medicine. He also founded the <a href="http://www.pitt.edu/~super1/collections/collection51.htm" target="_blank">Supercourse Travel Medicine Course</a> with eight lectures. He has consulted with various organisations, including the <a href="http://www.defence.gov.au/" target="_blank">Australian Defence Force</a>, the <a href="https://www.tga.gov.au/" target="_blank">Therapeutic Goods Administration</a> (Australia) and the <a href="http://who.int/en/" target="_blank">World Health Organization</a>.&nbsp;</p>
            <p>Professor Leggat graduated in medical science and medicine from the <a href="http://www.uq.edu.au/" target="_blank">University of Queensland</a>. He undertook postgraduate studies at various universities, including <a href="http://www.mahidol.ac.th/en/" target="_blank">Mahidol University</a>, the <a href="http://www.dundee.ac.uk" target="_blank">University of Dundee</a> and the <a href="http://www.otago.ac.nz" target="_blank">University of Otago</a>, before completing doctorates at the <a href="http://www.unisa.edu.au/" target="_blank">University of South Australia</a> and <a href="https://www.jcu.edu.au/" target="_blank">James Cook University</a> and a higher doctorate at the <a href="http://uq.edu.au/" target="_blank">University of Queensland</a>. He has also specialised in <a href="http://www.racgp.org.au" target="_blank">General Practice</a>, <a href="https://members.racp.edu.au/page/racp-faculties/australasian-faculty-of-public-health-medicine/" target="_blank">Public Health Medicine</a> and <a href="http://www.aerospacemedicine.org.au" target="_blank">Aerospace Medicine</a>. As part of a <a href="http://fulbright.com.au/" target="_blank">Fulbright Scholarship</a>, he completed the Primary Care Faculty Development Fellowship Program at <a href="http://www.msu.edu/" target="_blank">Michigan State University</a>. A current Fulbright Ambassador, his research encompasses a broad range of topics including occupational health issues for health care workers, public health aspects of disasters, and health and safety concerns for travellers. He has published&nbsp; &gt;500 journal papers (<a href="http://scholar.google.com/citations?user=7XgY0qcAAAAJ&amp;hl=en" target="_blank">&gt;4000 citations; <em>h-</em>index=31; i10-index=119</a>), and &gt;90 chapters, as well as &gt;35 books, directories and proceedings. His most recently published textbook is <a href="http://onlinelibrary.wiley.com/book/10.1002/9781118597361" target="_blank"><em>Essential Travel Medicine</em></a> (Wiley Blackwell, Oxford, UK, 2015)<em>. </em>He has presented &gt;350 papers at national and international conferences.&nbsp;</p>
            <p>Professor Leggat holds a number of professional and other Board appointments. These include the <a href="http://www-public.jcu.edu.au/public/groups/everyone/documents/membership/jcuprd1_062778.pdf" target="_blank">JCU Council,</a> <a title="World Safety Organization" href="http://www.worldsafety.org" target="_blank">World Safety Organization</a> (formerly Director-General, 1997-99), <a title="International Society of Travel Medicine" href="http://www.istm.org" target="_blank">International Society of Travel Medicine </a>(Secretary-Treasurer), <a title="The Australasian College of Aerospace Medicine" href="http://www.aerospacemedicine.org.au" target="_blank">The Australasian College of Aerospace Medicine </a>(Dean of Education), <a title="The Australasian College of Tropical Medicine" href="http://www.tropmed.org" target="_blank">The Australasian College of Tropical Medicine</a> (ACTM) (President), and the <a href="http://www.travelmedicine.org.au/" target="_blank">Faculty of Travel Medicine</a>, (Dean), ACTM. He was elected a Fellow of the <a href="http://www.companydirectors.com.au/" target="_blank">Australian Institute of Company Directors</a> in 1991 and has been the recipient of numerous awards and honours (selected Awards and honours from the past 10 years are given under Honours), including admission as a <a href="https://www.gg.gov.au/sites/default/files/files/honours/qb/qb2013/Gazette%20O%20of%20A%281%29.pdf" target="_blank">Member of the Order of Australia</a> in 2013 and an <a href="https://www.legislation.gov.au/Details/C2016G01262" target="_blank">Commander of the Order of St John</a> in 2016.</p>

          </section>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          <section className="metrics">
            <ul>
              <li className="staffonly"><a className="" href="#"><span className="metric pubs">246</span> publications</a></li>
              <li className="staffonly"><a className="" href="#"><span className="metric">8</span> HDR students</a></li>
              <li className="staffonly"><a className="" href="#"><span className="metric money">248k</span> grant funding</a></li>
              <li className="studentonly"><a className="" href="#"><span className="metric completion">◕ 75%</span> complete</a></li>
            </ul>
          </section>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

        </div>{/* /.overview */}
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
{/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}
{/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}
{/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}
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
{/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}
{/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}
{/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}
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
