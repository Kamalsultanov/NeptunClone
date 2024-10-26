import React from 'react';
import logo from '../../assets/logo.svg';
import flag from '../../assets/az.svg';
import call from '../../assets/call.svg';
import { FaSearch } from "react-icons/fa";
import Navbar from './navbar';


function Header() {
  return (
    < >
      <div className='flex items-center w-[90%] mx-auto justify-around py-4'>
        <span className='mr-4'>
          <img className='min-w-[100px] md:w-[300px] m-3' src={logo} alt="logo" />
        </span>
        <div className='flex items-center border-[0.5px] border-[#ff8230] rounded-full w-full  md:w-[30%]'>
              <FaSearch className='text-[#ff8230] ml-2 w-[20px] md:w-[30px]' /> 
              <input
                className='px-2 py-2 w-0 flex-grow rounded-full focus:outline-none'
                placeholder="Məhsulu axtarın"
                type="text"
              />
              <button className='bg-[#ff8230] text-white py-2 px-4 rounded-full whitespace-nowrap'>
                Axtar
              </button>
        </div>

        <div className='hidden md:flex'>
          <span className='flex w-6 items-center mx-4'>
            <img src={flag} alt="aze" />
            <p className='text-[0.7em] font-semibold'>AZE</p>
          </span>
          <span className='mx-4 w-24'>
            <img src={call} alt="call" />
          </span>
        </div>
      </div>
      <div > 
        <Navbar />  
      </div>
    </>
  );
}

export default Header;
