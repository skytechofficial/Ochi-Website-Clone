import React from 'react'
import "./Featured.css"

function Featured() {
  return (
    <div className='feature-container'>
      <div className="cont">
        <h1>Featured Projects</h1>
      </div>
      <div className="cards-parent">
        <div className="cards">
            <div className="card">
                <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
            <h1 className='fude'>FUDE</h1>
            </div>
            <div className="card">
                <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
            <h1 className='vise'>VISE</h1>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Featured