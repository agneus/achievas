import React from 'react'
import { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { auth } from "../firebase"
import { BrowserRouter, Link, useHistory } from "react-router-dom"
import './App.css';
import './Header.css'
import firebase from "../firebase";

function Header() {
  const [error, setError] = useState("")
  const { logout } = auth.signOut();
  const history = useHistory()
  // var user = firebase.auth().currentUser;
  // //const { currentUser } = useAuth()
  //   if (user) {
  //     // User is signed in.
      
      async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history.push("/")
        } catch {
          setError("Failed to log out")
        }
      }

      return (
        <div className='header'>
            <div className="head_logo">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0a46b329632909.55fc107b86e40.png" alt="" />
            </div>
            <div className="head_right">
                {/* <a href="#">My Account</a> */}
                {/* <BrowserRouter> */}
                <Link to="/account" className="btn">
                  <button className="btn">My Account</button>
                </Link>
                {/* </BrowserRouter> */}
                
                <a href="#">Courses[+]</a>
                {/* <a href="#">Membership</a> */}
                {/* <BrowserRouter> */}
                <Link to="/memberships" className="btn">
                  <button className="btn">Membership</button>
                </Link>
                {/* </BrowserRouter> */}
                {/* <a href="#">Sign Out</a> */}
                  <Button className="logOutBtn" variant="link" onClick={handleLogout}>
                Log Out
                </Button>
            </div>
        </div>
    )

    // } else {
    //   return (
    //     <div className='header'>
    //         <div className="head_logo">
    //             <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0a46b329632909.55fc107b86e40.png" alt="" />
    //         </div>
    //         <div className="head_right">
    //             {/* <a href="#">My Account</a> */}
    //             {/* <Link to="/account" className="btn">
    //               <button className="btn">My Account</button>
    //             </Link> */}
    //             <a href="#">Courses[+]</a>
    //             {/* <a href="#">Membership</a> */}
    //             {/* <BrowserRouter> */}
    //             <Link to="/memberships" className="btn">
    //               <button className="btn">Membership</button>
    //             </Link>
    //             {/* </BrowserRouter> */}
    //             {/* <a href="#">Sign Out</a> */}
    //               {/* <Button className="logOutBtn" variant="link" onClick={handleLogout}>
    //             Log in
    //             </Button> */}
    //             {/* <BrowserRouter> */}
    //             <Link to="/login" className="btn">
    //               <button className="btn">Log in</button>
    //             </Link>
    //             {/* </BrowserRouter> */}
    //         </div>
    //     </div>
    // )
    // }
  
    

  
    
}

export default Header
