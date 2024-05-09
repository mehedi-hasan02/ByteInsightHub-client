import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLink = <>
        <li className='list-none'><NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-400 border border-orange-400 btn bg-white hover:bg-white shadow-none hover:border-orange-400' : 'btn  shadow-none border-none'}>Home</NavLink></li>
        <li className='list-none'><NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-400 border border-orange-400 btn hover:bg-white shadow-none hover:border-orange-400 ' : 'btn  shadow-none border-none'}>Add Blog</NavLink></li>
        <li className='list-none'><NavLink to='/addTouristsSpots' className={({ isActive }) => isActive ? 'text-orange-400 border border-orange-400 btn hover:bg-white shadow-none hover:border-orange-400' : 'btn  shadow-none border-none'}>All Blogs</NavLink></li>
        <li className='list-none'><NavLink to='/myList' className={({ isActive }) => isActive ? 'text-orange-400 border border-orange-400 btn hover:bg-white shadow-none hover:border-orange-400' : 'btn  shadow-none border-none'}>Featured Blogs</NavLink></li>
        <li className='list-none'><NavLink to='/myList' className={({ isActive }) => isActive ? 'text-orange-400 border border-orange-400 btn hover:bg-white shadow-none hover:border-orange-400' : 'btn  shadow-none border-none'}>Wishlist</NavLink></li>
    </>

    return (
        // <nav className="relative bg-white shadow ">
        //     <div className="container px-6 py-3 mx-auto md:flex">
        //         <div className="flex items-center justify-between">
        //             <Link to="/">
        //                 {/* <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt=""/> */}
        //                 Blog
        //             </Link>
        //             {/* Mobile menu button */}
        //             <div className="flex lg:hidden md:hidden">
        //                 <button onClick={toggleMenu} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        //                         {isOpen ? (
        //                             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        //                         ) : (
        //                             <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
        //                         )}
        //                     </svg>
        //                 </button>
        //             </div>
        //         </div>
        //         {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        //         <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
        //             <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0 text-black">
        //                 {
        //                     navLink
        //                 }
        //             </div>
        //             <div className="relative mt-4 md:mt-0">
        //                 {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        //                     <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
        //                         <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        //                     </svg>
        //                 </span> */}
        //                 {/* <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search"/> */}
        //             </div>
        //         </div>
        //     </div>
        // </nav>
        <nav className="relative bg-white shadow ">
        <div className=" px-6 py-4 mx-auto">
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt=""/>
                    </Link>

                    {/* <!-- Mobile menu button --> */}
                    <div className="flex lg:hidden">
                        <button onClick={toggleMenu} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
                    <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                        {/* <Link to="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Join Slack</Link>
                        <Link to="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Browse Topics</Link>
                        <Link to="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Random Item</Link>
                        <Link to="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Experts</Link> */}
                        {
                            navLink
                        }
                    </div>

                    <div className="flex items-center mt-4 lg:mt-0">
                        <button className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                            <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar"/>
                            </div>

                            <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">Khatab wedaa</h3>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;
