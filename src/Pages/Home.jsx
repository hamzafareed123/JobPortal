import React from 'react'
import NavBarSection from '../Components/NavBarSection'
import Hero from '../Components/Hero'
import SearchFilterSection from '../Components/SearchFilterSection'
import ExploredSection from '../Components/ExploredSection'
import About from './About'
import JobList from './JobList'
import Testiominal from '../Components/Testiominal'
import Footer from '../Components/Footer'

function Home() {
  return (
   <>
   <NavBarSection/>
   <Hero/>
   <SearchFilterSection/>
   <ExploredSection/>
   <About/>
   <JobList/>
   <Testiominal/>
   <Footer/>
   </>
    
  )
}

export default Home