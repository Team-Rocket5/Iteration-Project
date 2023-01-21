import React from 'react'
import SearchFilter from '../components/SearchFilter';


const HomePage = () => {
  return (
    <>
      <div className='w-[80%] flex flex-col mx-auto mt-10'>
        {/* brief landlord info */}
        <div className=''></div>
        {/* Section for review card and add review ROW*/}
        <div className='flex flex-row'>
          <div>
            <SearchFilter />
          </div>
          {/* Add review */}
          <div>
            <AddReview />
          </div>
        </div>
        {/* Map and other info section */}
        <div></div>
      </div>
    </>
  );
}

export default HomePage