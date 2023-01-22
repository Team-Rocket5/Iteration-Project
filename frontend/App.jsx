import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddReview from './src/components/AddReview.jsx';
import ReviewDetails from './src/components/ReviewDetails.jsx';
import SearchFilter from './src/components/SearchFilter.jsx';
import LandingPage from './src/pages/LandingPage.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;