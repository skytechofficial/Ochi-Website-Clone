import React from "react";
import "./About.css";
import { motion } from "framer-motion"
function About() {
  return (
    <div className="about-container">
      <h1 className='font-["Neue_Montreal"]'>
        Ochi is a strategic presentation agency for forward- <br />
        thinking businesses that need to raise funds, sell <br /> prod­ucts,
        ex­plain com­plex ideas, and hire great <br /> peo­ple. What you can
        expect:
      </h1>
      <div className="hr"></div>
      <div className="center-part">
      <div className="center-about-left">
        <h1>What you can expect:</h1>
      </div>
      <div className="center-about-right">
        <div className="paras">
            <p>We create tailored presentations to help <br /> you persuade your colleagues, clients, or <br /> investors. Whether it’s live or digital, <br /> delivered for one or a hundred people.</p>
            <p>We believe the mix of strategy and <br /> design (with a bit of coffee) is what <br /> makes your message clear, convincing, <br /> and captivating.</p>
        </div>
        <div className="right-part">
            <h3>S:</h3>
            <h3 onClick={()=>{
                window.open("https://www.instagram.com/ochi_design/");
            }}>Instagram</h3>
                        <h3 onClick={()=>{
                window.open("https://www.behance.net/ochi_design");
            }}>Behance</h3>
                        <h3 onClick={()=>{
                window.open("https://www.facebook.com/profile.php?id=100067218942460");
            }}>Facebook</h3>
                        <h3 onClick={()=>{
                window.open("https://www.linkedin.com/company/56403597");
            }}>Linkedin</h3>
        </div>
      </div>
    </div>
    <div className="hr"></div>
      <div className="bottom-part">
      <div className="bottom-about-left">
        <h1>Our approach:</h1>
        <button>Read More <div className="circle"></div></button>
      </div>
      <div className="bottom-about-right">
        <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
      </div>
    </div>
    </div>
    
  );
}

export default About;
