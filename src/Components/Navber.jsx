import React from 'react';
import Marquee from 'react-fast-marquee';
import { NavLink } from 'react-router';
import { format } from 'date-fns';

const Navber = () => {
  return (
    <div className="bg-black">
      <div className="py-5 mx-auto font-bold text-white bg-gray-900 rounded-lg shadow-sm navbar max-w-7xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="text-white btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="z-50 p-2 mt-3 text-white bg-gray-800 shadow menu menu-sm dropdown-content rounded-box w-52">
              <li className="rounded-md hover:bg-gray-700">
                <NavLink to="/home" className="px-4 py-2">Apps</NavLink>
              </li>
              <li className="rounded-md hover:bg-gray-700">
                <NavLink to="/login" className="px-4 py-2">Login</NavLink>
              </li>
              <li className="rounded-md hover:bg-gray-700">
                <NavLink to="/signin" className="px-4 py-2">Sign In</NavLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-3 gap-20 ml-2">
            <img
              src="https://i.ibb.co.com/ZRfS7zR5/Whats-App-Image-2025-05-04-at-2-32-07-PM.jpg"
              alt="Logo"
              className="w-10 h-10 rounded-lg"
            />
            <Marquee className="text-lg font-semibold text-amber-400" speed={50}>
              <span className="mr-10">Welcome to <span className="font-bold text-cyan-400">Apps Home</span> 🎉</span>
            </Marquee>
          </div>
        </div>
        
        {/* Center Area */}
        <div className="relative w-full mt-4 lg:mt-0">
          <ul className="flex justify-center gap-10 text-sm font-medium">
            <li>
              <NavLink to="/home" className="hover:underline text-cyan-400">Apps</NavLink>
            </li>
            
          
          <div className="absolute top-0 flex gap-3 right-4">
            <NavLink to="/login" className="text-white btn btn-sm bg-lime-600 hover:bg-lime-700">Login</NavLink>
            <NavLink to="/signin" className="text-white btn btn-sm bg-cyan-600 hover:bg-cyan-700">Sign In</NavLink>
          </div>
          </ul>
        </div>

      
       
      </div>
    </div>
  );
};

export default Navber;
