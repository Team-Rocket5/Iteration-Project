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
      <div className='flex flex-col mb-44'>
        <div className='w-full block container mb-20'>
          <img
            src={apt}
            alt='apartment picture'
            className='relative w-[1400px] top-[80px] rotate-[-5deg] bg-white p-5 left-[33%]'
          />
          <img
            src={family2}
            alt='family picture'
            className='absolute w-[500px] rotate-[-17deg] top-[250px] bg-white p-5 left-[25%]'
          />

          <img
            src={family}
            alt='family picture'
            className='absolute w-[500px] rotate-[12deg] top-[500px] left-[35%] bg-white p-5'
          />
        </div>

        <main className='w-[80%] w-min-[80%] bg-yellow mx-auto mt-20'>
          <ul className='flex flex-wrap-reverse'>
            <li>
              {' '}
              <img
                src={building}
                alt='apartment building'
                className='h-96 rounded-lg'
              />
            </li>
            <li className='w-[40%] p-10 my-auto mx-auto rounded-lg'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
              rem nam! In sequi, iure corporis obcaecati voluptatibus distinctio
              impedit ipsum cum adipisci ad explicabo, molestias, libero
              perferendis doloremque expedita vel?
            </li>
          </ul>
          <ul className='flex'>
            <li className='w-[40%] p-10 my-auto mx-auto'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
              rem nam! In sequi, iure corporis obcaecati voluptatibus distinctio
              impedit ipsum cum adipisci ad explicabo, molestias, libero
              perferendis doloremque expedita vel?
            </li>
            <li>
              {' '}
              <img
                src={building}
                alt='apartment building'
                className='h-96 rounded-lg'
              />
            </li>
          </ul>
          <ul className='flex'>
            <li>
              {' '}
              <img
                src={building}
                alt='apartment building'
                className='h-96 rounded-lg'
              />
            </li>
            <li className='w-[40%] p-10 my-auto mx-auto'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
              rem nam! In sequi, iure corporis obcaecati voluptatibus distinctio
              impedit ipsum cum adipisci ad explicabo, molestias, libero
              perferendis doloremque expedita vel?
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}

export default LandingPage