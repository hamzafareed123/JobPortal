import React from 'react'
import NavBarSection from '../Components/NavBarSection'
import Hero from '../Components/Hero'
import SearchFilterSection from '../Components/SearchFilterSection'
import ExploredSection from '../Components/ExploredSection'
import About from './About'
import JobList from './JobList'
import Testiominal from '../Components/Testiominal'
import Footer from '../Components/Footer'
import AboutSection from '../Components/AboutSection'
import JobsSection from '../Components/JobsSection'


function Home() {
  return (
   <>
  
   <Hero/>
   <SearchFilterSection/>
   <ExploredSection/>
   <AboutSection/>
   <JobsSection/>
   <Testiominal/>
  
 
   </>
    
  )
}

export default Home