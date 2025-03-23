import React from 'react'
import "./Marquee.css"
import { motion } from "framer-motion"

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='marquee-container'>
        <div className="text-container">
        {["we are ochi","we are ochi"].map((item,index)=> <motion.h1 initia={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration: 5}}>{item}</motion.h1>)}
        </div>
    </div>
  )
}

export default Marquee
