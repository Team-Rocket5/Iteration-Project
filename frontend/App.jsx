import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './src/pages/LandingPage.jsx';
import AddReview from './src/components/AddReview.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddReview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;