import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/Mallikors_logo_wo_bg.png'

function Navbar() {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem('loggedin');

  useEffect(() => {
    console.log(isLogin);
  }, [isLogin]);

  return (
    <div className="sidebar fixed top-0 left-0 h-[100vh] w-16 bg-custom-black hover:w-64 transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-between mt-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Mallikors Logo" />
          <span className="sidebar-text self-center text-2xl font-semibold whitespace-nowrap text-white">Mallikors</span>
        </a>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          {isLogin ? (
            <>
              <li className='flex'>
              <span class="material-symbols-outlined text-gray-200 mt-1">home</span>
                <NavLink to="/" className="sidebar-text block py-2 px-3 text-white rounded hover:bg-gray-700">

                  Home
                </NavLink>
              </li>
              <li className='flex'>
              <span class="material-symbols-outlined text-gray-200 mt-1">post_add</span>
                <NavLink to="/postjobs" className="sidebar-text block py-2 px-3 text-white rounded hover:bg-gray-700">
                  Post Jobs
                </NavLink>
              </li>
              <li className='flex'>
              <span class="material-symbols-outlined text-gray-200 mt-1">find_in_page</span>
                <NavLink to="/findjobs" className="sidebar-text block py-2 px-3 text-white rounded hover:bg-gray-700">
                  Find Jobs
                </NavLink>
              </li>
              <li className='flex'>
              <span class="material-symbols-outlined text-gray-200 mt-1">work_update</span>
                <NavLink to="/jobresponse" className="sidebar-text block py-2 px-3 text-white rounded hover:bg-gray-700">
                  Responses
                </NavLink>
              </li>
              <li className='flex'>
              <span class="material-symbols-outlined text-gray-200 mt-1">add_business</span>                <NavLink to="/businessIdea" className="sidebar-text block py-2 px-3 text-white rounded hover:bg-gray-700">
                  BusinessIdea
                </NavLink>
              </li>
              <li className='flex'>
              <span class="material-symbols-outlined text-gray-200 mt-1">map</span>
                <NavLink to="/googleMap" className="sidebar-text block py-2 px-3 text-white rounded hover:bg-gray-700">
                  Google Map
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/scrapmapdata" className="sidebar-text block py-2 px-3 text-white rounded hover:bg-gray-700">
                  ScrapMapData
                </NavLink>
              </li> */}
              <li className='flex'>
              <span class="material-symbols-outlined text-gray-200 mt-1">contact_page</span>
                <NavLink to="/contactus" className="sidebar-text block py-2 px-3 text-white rounded hover:bg-gray-700">
                  Contact Us
                </NavLink>
              </li>
              <li className='flex'>
              <span class="material-symbols-outlined text-gray-200 mt-1">logout</span>
                <button
                  className="sidebar-text block py-2 px-3 text-white rounded hover:bg-gray-700"
                  onClick={() => {
                    localStorage.clear();
                    navigate('/signin');
                  }}
                >
                  LogOut
                </button>
              </li>
            </>
          ) : (
            <>
              <li className='flex'>
              <span class="material-symbols-outlined text-gray-200 mt-1">home</span>
                <NavLink to="/" className="sidebar-text block py-2 px-3 text-white rounded hover:bg-gray-700">

                  Home
                </NavLink>
              </li>
              <li className='flex'>
              <span class="material-symbols-outlined text-gray-200 mt-1">person</span>
                <NavLink to="/signup" className="sidebar-text block py-2 px-3 text-white rounded hover:bg-gray-700">
                  SignUp
                </NavLink>
              </li>
              <li className='flex'>
              <span class="material-symbols-outlined text-gray-200 mt-1">login</span>
                <NavLink to="/signin" className="sidebar-text block py-2 px-3 text-white rounded hover:bg-gray-700">
                  LogIn
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default React.memo(Navbar);
