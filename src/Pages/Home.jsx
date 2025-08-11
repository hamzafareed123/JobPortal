import React from 'react'
import NavBarSection from '../Components/NavBarSection'

import Hero from '../Components/Hero'
import SearchFilterSection from '../Components/SearchFilterSection'
import ExploredSection from '../Components/ExploredSection'
import About from './About'

function Home() {
  return (
   <>
   <NavBarSection/>
   <Hero/>
   <SearchFilterSection/>
   <ExploredSection/>
   <About/>
   </>
    
  )
}

export default Home