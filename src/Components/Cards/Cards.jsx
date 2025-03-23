import React from 'react'
import "./Cards.css"

function Cards() {
  return (
    <div>
      <div className="cards-main">
        <div className="cards-cont">
            <div className="box">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
                <button className='main-btn'>&copy;2019-2022</button>
            </div>
        </div>
        <div className="cards-cont">
            <div className="box">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button>Rating 5.0 ON CLUTCH</button>
            </div>
            <div className="box">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button>Business Bootcamp Alumni</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
