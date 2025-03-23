import {React,useState,useEffect} from 'react'
import "./EyesGame.css"

function EyesWaliGame() {
    const [rotate,setRotate] = useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
            setRotate(angle-180);
        })
    })
  return (
    <div className='eyes'>
        <div className="sub-eyes">
            {/* <img src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg" alt="" /> */}
            <div className="eyes-cont">
            <div className="eye">
                    <div className="eye-ball">
                        <div style={{transform : `translate(-50%, -50%) rotate(${rotate}deg)`}} className="rotating-line">
                        <div className="main-circle"></div>
                        </div>
                    </div>
                </div>
                <div className="eye">
                    <div className="eye-ball">
                        <div style={{transform : `translate(-50%, -50%) rotate(${rotate}deg)`}} className="rotating-line">
                        <div className="main-circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EyesWaliGame
