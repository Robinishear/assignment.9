import React from 'react';
import Marquee from 'react-fast-marquee';
import { NavLink } from 'react-router';

const Navber = () => {
  return (
    <div className="py-5 mx-auto font-bold bg-gray-900 rounded-lg shadow-sm navbar max-w-7xl">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
          tabIndex={0}
          className="p-2 mt-3 text-2xl shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52">
          <li className="border-0 rounded-md hover:bg-gray-700">
        <NavLink to="home" className="px-4 py-2">Apps</NavLink>
      </li>
        </ul>
      </div>
    <div className='flex'>
      <img src="https://i.ibb.co.com/ZRfS7zR5/Whats-App-Image-2025-05-04-at-2-32-07-PM.jpg" className='w-10 h-10 rounded-lg'/>
      <Marquee>
    <a className="text-xl "> <span className='text-gray-500'>Apps</span>  <span className='text-amber-500'>Home ?</span></a>
    </Marquee>
    </div>
    </div>

    
    <div className="relative flex items-center justify-center w-full px-4 py-2 bg-gray-900">
  {/* Centered 'Apps' */}
  <ul className="text-white underline rounded-lg ">
    <li className="border-0 rounded-md hover:bg-gray-700">
      <NavLink to="home" className="items-center mx-auto mx-w-7xl">Apps</NavLink>
    </li>
  </ul>

  {/* Right-aligned buttons */}
  <div className="absolute flex gap-2 right-4">
    <NavLink to="login" className="btn">Login</NavLink>
    <NavLink to="signin" className="btn">Button</NavLink>
  </div>
</div>

   
  </div>
  );
};

export default Navber;
