import React from "react"
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Account from "./account"
import Courses from "./Courses"
import Membership from "./Membership"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import TrialForm from "./trial"
import GoldForm from "./gold"
import SocialForm from "./social"
//import UpdateProfile from "./UpdateProfile"

function App() {
  return (

  
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/account">
              <Account />
            </PrivateRoute>
            <PrivateRoute path="/courses">
              <Courses />
            </PrivateRoute>
              <PrivateRoute path="/memberships">
              <Membership />
            </PrivateRoute>
              <PrivateRoute path="/trial">
              <TrialForm />
            </PrivateRoute>
              <PrivateRoute path="/social">
              <SocialForm />
            </PrivateRoute>
              <PrivateRoute path="/gold">
              <GoldForm/>
            </PrivateRoute>
              {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>

  )
}

export default App
