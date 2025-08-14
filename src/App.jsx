
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { Route,Routes } from 'react-router-dom'
import JobList from './Pages/JobList'
import NavBarSection from './Components/NavBarSection'
import Footer from './Components/Footer'
import Page404 from './Pages/Page404'



function App() {


  return (
    <>
    <NavBarSection/>
    <Routes>
      <Route path='/' element={<Home/>}/>
     
      <Route path='/about' element={<About/>}/>
      <Route path='/jobs' element={<JobList/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/*' element={<Page404/>}/>
      
      
    </Routes>

    <Footer/>
   
    </>
  )
}

export default App
