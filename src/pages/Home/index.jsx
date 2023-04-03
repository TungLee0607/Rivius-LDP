import React from 'react'
import Footer from '../../components/Footer'
import Option from '../../components/Option'
import Partner from '../../components/Partner'
import Subscribe from '../../components/Subscribe'
import Banner from './Banner'
import Introduction from './Introduction'
import Project from './Project'
import Team from './Team'

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <Banner />
        <Option />
        <Introduction />
        <Project />
        <Team />
        <Partner />
        <Subscribe />
        <Footer />
      </div>
    </div>
  )
}
