import React from 'react'
import Navbar from '../components/Navbar.jsx'
import family from '../assets/family.jpg'
import family2 from '../assets/family2.jpg';
import apt from '../assets/apt.jpg';
import building from '../assets/building.jpg';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className='relative'>
        <img
          src={apt}
          alt='apartment picture'
          className='absolute w-[1400px] top-[200px] rotate-[-5deg] bg-white p-5 left-[33%]'
        />
        <img
          src={family2}
          alt='family picture'
          className='absolute w-[500px] rotate-[-17deg] top-[150px] bg-white p-5 left-[25%]'
        />

        <img
          src={family}
          alt='family picture'
          className='absolute w-[500px] rotate-[12deg] top-[400px] left-[35%] bg-white p-5'
        />
      </div>
      <main className='block'>
        <img
          src={building}
          alt='apartment building'
          className=''
        />
      </main>
    </>
  );
}

export default LandingPage