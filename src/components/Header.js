import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className="head_logo">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0a46b329632909.55fc107b86e40.png" alt="" />
            </div>
            <div className="head_right">
                <a href="#">My Account</a>
                <a href="#">Courses[+]</a>
                <a href="#">Membership</a>
                <a href="#">Sign Out</a>
            </div>
        </div>
    )
}

export default Header