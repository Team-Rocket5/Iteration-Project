import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './src/components/Navbar.jsx';
import LandingPage from './src/pages/LandingPage.jsx';
import LandlordPage from './src/pages/LandlordPage.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<LandingPage />} /> */}
          <Route path='/' element={<LandlordPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;