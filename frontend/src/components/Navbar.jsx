import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Navbar = () => {

  return (
    <header className='w-[100%] fixed z-10 top-0'>
      <div className='header'>
        <div className='max-w-screen-xl mx-auto p-4'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center sm:space-x-10 space-x-2'>
              <img className='h-24' src={Logo} alt='Logo'></img>
              <Link to='/'>
                <h1 className='text-dark py-2 hover:text-dark-purple font-semibold text-5xl'>
                  Rate My Landlord
                </h1>
              </Link>
            </div>
            <div className='flex items-center sm:space-x-10 space-x-2'>
              <Link to='/home'>
                <h3 className='text-gray-600 py-2 hover:text-dark-purple font-semibold text-2xl'>
                  Search
                </h3>
              </Link>
              <Link to='/landlord'>
                <h3 className='text-gray-600 py-2 hover:text-dark-purple font-semibold text-2xl'>
                  Reviews
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
