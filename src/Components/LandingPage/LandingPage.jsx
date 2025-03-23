import React from "react";
import "./LandingPage.css";
import { motion } from "framer-motion"

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="landing-page">
      <div className="text-cont">
        {["We Create", "EYE OPENING", "PRESENTATIONS"].map((elem, index) => {
          return (
            <div className="masker">
              <div className="inner-mask">
                {index == 1 && <motion.div initial={{width : "0"}} animate={{width : "9vw"}} transition={{ease : [0.76,0,0.24,1],duration:1.2}} className="ochi-video">
                  <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /></motion.div>}
                <h1 className="heading" key={index}>
                  {elem}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bottom-options">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return <h3 className="options">{item}</h3>;
        })}
        <div className="start">
          <div className="startChild">Start the project</div>
          <h3 className="arrow">
            <i class="ri-arrow-right-up-line"></i>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
