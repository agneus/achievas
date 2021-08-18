import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="foot_logo">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0a46b329632909.55fc107b86e40.png" alt="" />
            </div>
            <div className="foot_res">
                <h2 className='foot_h2'>RESOURCES</h2>
                <a href="" className='foot_a'>Formula Sheets - Math</a>
                <a href="" className='foot_a'>Formula Sheets - Physics</a>
                <a href="" className='foot_a'>Curriculum - DSE Math</a>
                <a href="" className='foot_a'>Curriculum - DSE Physics</a>
            </div>
            <div className="foot_company">
                <h2 className='foot_h2'>COMPANY</h2>
                <a href="" className='foot_a'>About</a>
                <a href="" className='foot_a'>Contact Us</a>
                <a href="" className='foot_a'>Privacy Policy</a>
                <a href="" className='foot_a'>Terms and Conditions</a>
            </div>
            <div className="foot_general">
                <h2 className='foot_h2'>GENERAL</h2>
                <a href="" className='foot_a'>FAQs</a>
                <a href="" className='foot_a'>Help & Suppost</a>
                <a href="" className='foot_a'>Membership Options</a>
                <a href="" className='foot_a'>Donate</a>
                <a href="" className='foot_a'>Feedback</a>
            </div>
        </div>
    )
}

export default Footer
