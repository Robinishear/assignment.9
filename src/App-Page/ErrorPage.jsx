import React from 'react';
import { Link, NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <>
  
        <div className='mx-auto max-w-7xl'> 
        
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            
            <label className="swap swap-flip text-9xl">
  
  <input type="checkbox" />

  <div className="text-3xl font-bold swap-on text-cyan-300">Error <span> <img src="https://i.ibb.co.com/zTxSxgpK/download.jpg"  className='object-cover rounded w-19 h-19'/> </span> </div>
  
  <img 
                    src="https://i.ibb.co.com/HfCbVMYD/electrocuted-caveman-animation-404-error-page.gif"
                    alt="Error 404: Page Not Found"
                    className="w-[400px] mt-6 rounded-lg  shadow-lg" 
                />
                

</label>
              

               
                <div role="alert" className="py-8 mt-4 text-center alert alert-error px-25">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2 stroke-current text-cyan-300" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    
                    {/* Main Error Text */}
                    <span className="text-2xl font-bold text-cyan-300">Error! Task failed successfully.</span>
                    <div className="flex justify-center mt-2 space-x-2 text-cyan-300">
                        <span className="loading loading-ring loading-xs"></span>
                        <span className="loading loading-ring loading-sm"></span>
                        <span className="loading loading-ring loading-md"></span>
                        <span className="loading loading-ring loading-lg"></span>
                        <span className="loading loading-ring loading-xl"></span>
                    </div>
                </div>
                <div className="py-2 mt-8">
                <NavLink className="relative inline-flex items-center justify-center px-1 px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                    {/* Button Hover Animation */}
                    <span className="absolute w-0 h-0 transition-all ease-out bg-green-200 rounded-full duration-2000 group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    
                   
                    <div className="tooltip">
                        <div className="tooltip-content">
                            <div className="text-2xl font-black bg-gray-800 ">Wow!</div>
                        </div>
                        <NavLink to="/" className="text-xl font-bold text-cyan-300">Home page</NavLink>
                    </div>
                  
                </NavLink>
            </div>
            </div>
            
        </div>
        </>
    );
};

export default ErrorPage;
