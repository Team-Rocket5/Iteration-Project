import React from 'react';
import AddReview from '../components/AddReview.jsx'
import ReviewDetails from '../components/ReviewDetails.jsx';


const LandlordPage = () => {


  return (
    <>
      <div className='w-[80%] flex flex-col mx-auto mt-10'>
        {/* brief landlord info */}
        <div className=''></div>
        {/* Section for review card and add review ROW*/}
        <div className='flex flex-row max-h-[588px] w-fit mx-auto'>
          <div className='overflow-auto'>
            <ReviewDetails />
            <ReviewDetails />
            <ReviewDetails />
            <ReviewDetails />
            <ReviewDetails />
          </div>
          {/* Add review */}
          <div className='pt-2'>
            <AddReview />
          </div>
        </div>
        {/* Map and other info section */}
        <div></div>
      </div>
    </>
  );
};

export default LandlordPage;
