import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './src/pages/LandingPage.jsx'
import LandlordPage from './src/pages/LandlordPage.jsx'
import Navbar from './src/components/Navbar.jsx'
import HomePage from './src/pages/HomePage.jsx'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Login from './src/components/LoginNew.jsx'
import AddLandlordNew from './src/components/AddLandlordNew.jsx';
import Dashboard from './src/pages/DashboardPage.jsx';
import { SearchProvider } from './src/SearchContext.jsx';

const App = () => {
  return (
    <>
      <SearchProvider>
        <BrowserRouter>
          <Navbar />
          <div className='socials'>
            <FaTwitter className='socIcon' size={30} />
            <FaFacebook className='socIcon' size={30} />
            <FaInstagram className='socIcon' size={30} />
          </div>
          <Routes>
            <Route path='/' element={<LandingPage />} />

            <Route path='/home' element={<HomePage />} />
            <Route path='/landlord' element={<LandlordPage />} />
            <Route path='/addLandlordNew' element={<AddLandlordNew />} />
            <Route path='/dashboard' element={<Dashboard />} />
            {/* <Route path='/signup' element={<Signup />} /> */}
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </>
  );
}

export default App
