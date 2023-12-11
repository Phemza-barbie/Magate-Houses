import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navigation'
import Home from './components/Home/Home'
import Contactus from './components/Contactus/Contactus'
import Ourhomes from './components/Ourhomes/Ourhomes'
import {Routes, Route} from 'react-router-dom'

function App () {

return (
    <>
      <h1></h1>
      <Navbar/>

      {/* <Contactus/>
      <Ourhomes/> */}
       <Routes>
        <Route path='/' element={ <Home/>}></Route>
        <Route path='/contactUs' element={ <Contactus/>}></Route>
        <Route path='/ourHomes' element={ <Ourhomes/>}></Route>
        {/* <Route path='/Aboutus' element={ <Aboutus/>}></Route> */}
       </Routes>
      
    </>
  )
}

export default App
