import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Components/LandingPage/LandingPage'
import Marquee from './Components/Marquee/Marquee'
import About  from './Components/About/About'
import EyesGame from './Components/Eyes Game/EyesGame'
import Featured from './Components/FeaturedProjects/Featured.jsx'
import Cards from './Components/Cards/Cards.jsx'
import Footer from './Components/Footer/Footer.jsx'
import LastFooter from './Components/LastFooter/LastFooter.jsx'
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from "framer-motion"
function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='container'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <EyesGame />
      <Featured />
      <Cards />
      <Footer />
      <LastFooter />
    </div>
  )
}

export default App
