import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'

function App() {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
     <Navbar></Navbar>
     <LandingPage></LandingPage>
     <Marquee></Marquee>
     <About></About>
     <Eyes></Eyes>
    </div>
  )
}

export default App
