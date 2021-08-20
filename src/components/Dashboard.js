import React, { useState } from "react"
import './App.css';
import Banner from './Banner';
import Enterprise from './Enterprise';
import Footer from './Footer';
import Header from './Header'

export default function Dashboard() {

  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Enterprise/>
      <Footer/>
    </div>
  
  )
}
