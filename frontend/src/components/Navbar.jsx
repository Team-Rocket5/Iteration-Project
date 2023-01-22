import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Navbar = ({ isLoggedIn }) => {

  return (
    <header>
      <div className="bg-olive">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center sm:space-x-10 space-x-2">
              <img className="h-24" src={Logo} alt="Logo"></img>
              <Link to="/">
                <h1 className="text-dark py-2 hover:text-dark-purple font-semibold text-2xl">
                  Rate My Landlord
                </h1>
              </Link>
            </div>
            <div className="flex items-center sm:space-x-10 space-x-2">
              <Link to="/">
                <h3 className="text-gray-600 py-2 hover:text-dark-purple font-semibold">
                  Home
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
