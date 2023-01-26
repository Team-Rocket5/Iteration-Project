import React from 'react';
import ReviewDetails from '../components/ReviewDetails.jsx';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const Dashboard = () => {

  return (
    <>
      <div className='w-[80%] flex flex-col mx-auto mt-40'>
        <h1 className='text-4xl mb-8 font-bold text-dark text-center'>
          My Reviews 
        </h1>
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
        </div>
      </div>
    </>
  );
};

export default Dashboard;
