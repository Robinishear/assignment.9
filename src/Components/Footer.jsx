import React from 'react';
import Marquee from 'react-fast-marquee';

const Footer = () => {
    return (
        <footer className="px-4 py-8 mx-auto mt-10 text-white bg-gray-900 max-w-7xl rounded-2xl">
            <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
                {/* First Column: Logo and Text */}
                <div className="flex flex-col items-start">
                    <h3 className="mb-4 text-xl font-bold text-lime-400 animate-pulse">Company Name</h3>
                    <p className="mb-4 text-sm text-gray-300">
                        
                    <Marquee>Here, you can provide a brief description of  </Marquee> <Marquee> your company.  It can be used to give some </Marquee>  <Marquee> information about your company.</Marquee> 
                    </p>
                    <div className="flex mt-4 space-x-4">
                        <a href="#" className="transition duration-300 hover:text-blue-500 hover:scale-110" aria-label="Facebook">
                            <i className="text-xl fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="transition duration-300 hover:text-twitter-500 hover:scale-110" aria-label="Twitter">
                            <i className="text-xl fab fa-twitter"></i>
                        </a>
                        <a href="#" className="transition duration-300 hover:text-instagram-500 hover:scale-110" aria-label="Instagram">
                            <i className="text-xl fab fa-instagram"></i>
                        </a>
                        <a href="#" className="transition duration-300 hover:text-linkedin-500 hover:scale-110" aria-label="LinkedIn">
                            <i className="text-xl fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                {/* Second Column: Important Links */}
                <div>
                    <h3 className="mb-4 text-xl font-bold text-lime-400 animate-pulse">Important Links</h3>
                    <ul className="text-sm">
                        <li className="mb-2">
                            <a href="#" className="flex items-center transition duration-900 hover:text-lime-400 hover:translate-y-10">
                                <i className="mr-2 fas fa-chevron-right"></i>Home
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="flex items-center transition duration-300 hover:text-lime-400 hover:translate-x-2">
                            <i className="mr-2 fas fa-chevron-right"></i>  Services
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="flex items-center transition duration-300 hover:text-lime-400 hover:translate-x-2">
                            <i className="mr-2 fas fa-chevron-right"></i>  About Us
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="flex items-center transition duration-300 hover:text-lime-400 hover:translate-x-2">
                            <i className="mr-2 fas fa-chevron-right"></i>  Contact
                            </a>
                        </li>
                         <li className="mb-2">
                            <a href="#" className="flex items-center transition duration-300 hover:text-lime-400 hover:translate-x-2">
                            <i className="mr-2 fas fa-chevron-right"></i>  Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Third Column: Contact Information */}
                <div>
                    <h3 className="mb-4 text-xl font-bold text-lime-400 animate-pulse">Contact Information</h3>
                    <ul className="text-sm">
                        <li className="flex items-center mb-2 ">
                            <i className="mr-2 fas fa-map-marker-alt text-lime-400"></i>
                            <Marquee>
                            Address: 123 Dhaka, Bangladesh
                            </Marquee>
                        </li>
                        <li className="flex items-center mb-2">
                            <i className="mr-2 fas fa-phone text-lime-400"></i>
                            <Marquee>
                            Phone: +880 1334757898
                            </Marquee>
                        </li>
                        <li className="flex items-center mb-2">
                            <i className="mr-2 fas fa-envelope text-lime-400"></i>
                            <Marquee>
                            Email:mdrobinahmed57898@gmail.com
                            </Marquee>
                        </li>
                         <li className="flex items-center mb-2">
                            <i className="mr-2 fas fa-clock text-lime-400"></i>
                            <Marquee>
                            Hours: 10 AM - 6 PM
                            </Marquee>
                        </li>
                    </ul>
                </div>

                {/* Fourth Column: Newsletter */}
                <div>
                    <h3 className="mb-4 text-xl font-bold text-lime-400 animate-pulse">Newsletter</h3>
                    <p className="mb-4 text-sm text-gray-300">
                    <Marquee>
                        Subscribe to our newsletter and get the latest updates.
                        </Marquee>
                    </p>
                    <div className="flex flex-col sm:flex-row">
                        <input
                            type="email"
                            placeholder=" Your Email"
                            className="px-4 py-2 mb-2 text-white transition duration-300 bg-gray-800 border-0 rounded-l-md focus:ring-2 focus:ring-lime-500 focus:outline-none sm:mb-0 sm:mr-2 focus:ring-opacity-70"
                        />
                        <button className="px-2 py-2 text-white transition duration-300 rounded-md bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50 hover:scale-105">
                          Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="pt-4 mt-8 text-sm text-center text-gray-400 border-t border-gray-700">
                &copy; {new Date().getFullYear()} All rights reserved. Designed by [Your Name]
            </div>
             <style jsx global>{`
                .fa-facebook-f:before { content: "\\f082"; }
                .fa-twitter:before { content: "\\f081"; }
                .fa-instagram:before { content: "\\f16d"; }
                .fa-linkedin-in:before { content: "\\f0e1"; }
                .fa-chevron-right:before { content: "\\f054"; }
                .fa-map-marker-alt:before { content: "\\f278"; }
                .fa-phone:before { content: "\\f095"; }
                .fa-envelope:before { content: "\\f0e0"; }
                .fa-clock:before { content: "\\f017"; }

                .animate-pulse {
                  animation: pulse 2s infinite;
                }

                @keyframes pulse {
                  0% { transform: scale(8.8); }
                  70% { transform: scale(1.15); }
                  200% { transform: scale(1.8); }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
