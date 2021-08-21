import React from 'react'
import './Banner.css'
import brain from './brain.gif'

function Banner() {
    return (
        <div className="banner">
            <div className="banner_left">
``              <h1>Self-Driven Learning</h1>
                <p>I hear and I forget, I see and I remember, I do and I understand</p>
                <p>-Confucius (2500 years ago)</p>
                <button className='banner_button'>Video Demo</button>
            </div>
            <div className="banner_right">
            <img src={brain} alt="" />
            </div>
        </div>
    )
}

export default Banner
