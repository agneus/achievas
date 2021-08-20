import React from 'react'
import { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import './App.css';
import './Header.css'

function Header() {
    const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
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
                <a href="#">My Account</a>
                <a href="#">Courses[+]</a>
                {/* <a href="#">Membership</a> */}
                <Link to="/memberships">
          <button className="btn">Membership</button>
        </Link>
                {/* <a href="#">Sign Out</a> */}
                <Button variant="link" onClick={handleLogout}>
           Log Out
        </Button>
            </div>
        </div>
    )
}

export default Header
