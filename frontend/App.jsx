import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './src/components/Login.jsx'
import LandingPage from './src/pages/LandingPage.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
