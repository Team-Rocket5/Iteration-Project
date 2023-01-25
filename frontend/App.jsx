import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '/Users/samanthamills/Desktop/Codesmith/IterationProject/Iteration-Project/frontend/src/components/Login.jsx'
import LandingPage from './src/pages/LandingPage.jsx'
import LandlordPage from './src/pages/LandlordPage.jsx'
import Navbar from './src/components/Navbar.jsx'
import HomePage from './src/pages/HomePage.jsx'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="socials">
        <FaTwitter className="socIcon" size={30} />
        <FaFacebook className="socIcon" size={30} />
        <FaInstagram className="socIcon" size={30} />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/landlord" element={<LandlordPage />} />
      </Routes>
    </>
  )
}

export default App
