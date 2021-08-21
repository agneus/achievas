import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import LogImage from "./loginImage.gif"
import './Login.css'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <div className="LoginPage">
      <div className="LoginContainer">
          <div className="LoginImage">
            <img src={LogImage}></img>
          </div>
            <div className="formMain">
                <div className="welcomeMessage">
                  <h2 className="text-center mb-4" className="loginHeading1">WELCOME</h2>
                  <h2 className="text-center mb-4" className="loginHeading2">Login to AchieVas</h2>
                  <h2 className="text-center mb-4" className="loginHeading3">Academy</h2>
                </div>
                {/* {error && <Alert variant="danger">{error}</Alert>} */}
                <Form onSubmit={handleSubmit} className="formSecond">
                  <Form.Group id="email">
                    <Form.Label className="heading">Email</Form.Label>
                    <Form.Control className="formBox" type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label className="heading">Password</Form.Label>
                    <Form.Control className="formBox" type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Button disabled={loading} className="w-100" className="loginButton" type="submit">
                    Login
                  </Button>
                  <div className="w-100 text-center mt-3" className="linkText1">
                  <Link to="/forgot-password" className="linkText1">Forgot Password?</Link>
                  </div>
                  <div className="w-100 text-center mt-2 " className="linkText2">
                    <Link to="/signup" className="linkText2"><Button className="signupButton">Need an account? Sign Up</Button></Link>
                  </div>
                </Form>
            </div>
            {/* <Card className="LoginCard"> */}
              {/* <Card.Body> */}
              {/* </Card.Body> */}
            {/* </Card> */}

      </div>
    </div>
  )
}
