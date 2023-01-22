import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddReview from './src/components/AddReview.jsx'
import ReviewDetails from './src/components/ReviewDetails.jsx'
import SearchFilter from './src/components/SearchFilter.jsx'
import LandingPage from './src/pages/LandingPage.jsx'
import Login from './src/components/Login'

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        {/* <Route path='/' element={<AddReview />} /> */}
        {/* <Route path='/' element={<ReviewDetails />} />  */}
        <Route path="/" element={<SearchFilter />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  )
}

export default App
