import React from 'react'
import './Banner.css'

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
                <img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/random-anime-pack-1/sticker_1.png?d812a2af64073ed33f0d986364de44c0&d=200x200" alt="" />
            </div>
        </div>
    )
}

export default Banner
