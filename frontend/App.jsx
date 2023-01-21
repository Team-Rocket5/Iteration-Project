import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddReview from './src/components/AddReview.jsx';
import ReviewDetails from './src/components/ReviewDetails.jsx';
import LandingPage from './src/pages/LandingPage.jsx';
import LandlordPage from './src/pages/LandlordPage.jsx';
import Navbar from './src/components/Navbar.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandlordPage />} />
          {/* <Route path='/' element={<LandingPage />} /> */}
          {/* <Route path='/' element={<AddReview />} /> */}
          {/* <Route path='/' element={<ReviewDetails />} />  */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;