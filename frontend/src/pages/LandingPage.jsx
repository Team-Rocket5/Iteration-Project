import React from 'react'
import family from '../assets/family.jpg'
import family3 from '../assets/family3.jpg';
import family4 from '../assets/family4.jpg';
import family2 from '../assets/family2.jpg';
import apt from '../assets/apt.jpg';
import building from '../assets/building.jpg';

const LandingPage = () => {
  return (
    <>
      <div className='flex flex-col mb-44 mt-44'>
        <div className='w-full container mb-20 mx-auto'>
          <img
            src={apt}
            alt='apartment picture'
            className='relative w-[1400px] top-[80px] rotate-[2deg] bg-white p-5'
          />
          <img
            src={family2}
            alt='family picture'
            className='absolute w-[500px] rotate-[-17deg] top-[800px] bg-white p-5 left-[20%]'
          />

          <img
            src={family}
            alt='family picture'
            className='absolute w-[500px] rotate-[12deg] top-[500px] left-[35%] bg-white p-5'
          />
          <img
            src={family3}
            alt='family picture'
            className='absolute w-[500px] rotate-[-6deg] top-[200px] left-[50%] bg-white p-5'
          />
          <img
            src={family4}
            alt='family picture'
            className='absolute w-[500px] rotate-[-12deg] top-[1100px] left-[55%] bg-white p-5'
          />
        </div>

        <main className='w-[80%] w-min-[800px] bg-yellow mx-auto mt-20'>
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