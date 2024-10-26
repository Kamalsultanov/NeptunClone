import React from 'react';
import { useState } from 'react';

import { FaBarsStaggered } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import Category from './Category';


function Navbar() {
    const [open, setOpenSidebar] = useState(false);
    const [dropdown, setOpenDropdown] = useState(null);

    const handleToggle = (dropdownName) => {
        setOpenDropdown(dropdown === dropdownName ? null : dropdownName);
    };
  return (
    <nav className='bg-[#ff8300] w-[100%] h-[50px] flex justify-around items-center px-4 z-10   '>
        <div className='text-white text-xl relative '>
              <FaBarsStaggered />
              <Category />    
        </div>
        <div className='hidden lg:block'>
            <ul className='flex text-white font-semibold'>
            <li className='px-2'><a href="#"> Ana səhifə </a></li>      
            <li onMouseEnter={() => handleToggle('HaqqımızdaNav')} className='px-2 relative'>
                    <a href="#" className='flex items-center'> Haqqımızda <span  ><IoMdArrowDropdown /></span></a>
                    <ul
                          className={` ${dropdown === 'HaqqımızdaNav' ? 'h-[55px]' : 'h-[0px]'} overflow-hidden duration-500 px-3 absolute z-10 font-thin text-[0.7em] bg-white text-black mt-[12.78px] rounded-b-lg drop-shadow-md`}>
                          <li className='p-1'>Siyasətimiz</li>
                          <li className='p-1'>Yeniliklər</li>
                    </ul>
            </li>      
            <li onMouseEnter={() => handleToggle('AksiyalarNav')} className='px-2 relative'>
                    <a href="#" className='flex items-center'> Aksiyalar <span  ><IoMdArrowDropdown /></span></a>
                    <ul
                          className={` ${dropdown === 'AksiyalarNav' ? 'h-[90px]' : 'h-[0px]'} overflow-hidden duration-500 px-3 absolute z-10 font-thin text-[0.7em] bg-white text-black mt-[12.7px] rounded-b-lg drop-shadow-md`}>
                          <li className='p-1'>Kampaniyalar</li>
                          <li className='p-1'>Neptun Bonus Kart</li>
                          <li className='p-1'>Elektron Kataloq</li>
                    </ul>
            </li>   
            <li onMouseEnter={() => handleToggle('SuperMarketNav')} className='px-2 relative'>
                    <a href="#" className='flex items-center'> Supermarketlər <span  ><IoMdArrowDropdown /></span></a>
                    <ul
                          className={` ${dropdown === 'SuperMarketNav' ? 'h-[130px]' : 'h-[0px]'} overflow-hidden duration-500 px-3 absolute z-10 font-thin text-[0.7em] bg-white text-black mt-[12.7px] rounded-b-lg drop-shadow-md`}>
                          <li className='p-1'>Mağazalaramız</li>
                          <li className='p-1'>İrad Və Təkliflər</li>
                          <li className='p-1'>Alıcıların Nəzərinə</li>
                          <li className='p-1'>Partnyorluq</li>
                          <li className='p-1'>Tərəfdaşlar</li>
                    </ul>
            </li>        
            <li onMouseEnter={() => handleToggle('KaryeraNav')} className='px-2 relative'>
                    <a href="#" className='flex items-center'> Karyera <span  ><IoMdArrowDropdown /></span></a>
                    <ul
                          className={` ${dropdown === 'KaryeraNav' ? 'h-[90px]' : 'h-[0px]'} w-[100px] overflow-hidden duration-500 px-3 absolute z-10 font-thin text-[0.7em] bg-white text-black mt-[12.7px] rounded-b-lg drop-shadow-md`}>
                          <li className='p-1'>İşə Qəbul Proseduru</li>
                          <li className='p-1'>Vakansiyalar</li>
                          <li className='p-1'>CV Yerləşdirin</li>
                    </ul>
            </li>     
            <li className='px-2'><a href="#"> Əlaqə </a></li>      
            </ul>
        </div>
        <div className='text-white flex items-center lg:justify-star'>
            <span className='flex items-center text-[0.8em] border-r'>
                <FaLock /> 
                <p className='p-1'>Giriş</p>
            </span>
            <div className="relative inline-block text-left">
            <div className="relative inline-block text-left">
            <div className="group">
                <button type="button"
                    className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white">
                    <p className='hidden lg:block text-[0.8em]'>Hesabım</p>                  
                    <IoIosArrowDown/>
                </button>
                <div className="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100  border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                    <div className="py-1">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 lg:hidden">Hesabım</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sifariş tarixçəsi</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Əməliyyatlar</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Yükləmələr</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sifarişi rəsmiləşdir</a>
                    </div>
                </div>
            </div>        
        </div>
            </div>
            <span className='m-1 text-[1em]'><FaRegHeart /></span>
            <span className='m-1 text-[1em]'><BsArrowRepeat /></span>
            <span className='m-1 text-[1em]'><CgShoppingCart /></span>
        </div>

          <div className={` ${ open ? 'w-[300px]' : 'w-[0px]'}  absolute bg-white  h-full left-0 top-0 z-10' id='sidebar overflow-hidden transition-all duration-700	 `}>
                    <div className='font-bold absolute right-3 m-2 text-[1.2em]' onClick={() => setOpenSidebar(!open)}><RxCross2 /></div>
                    <ul className=' mt-8 mx-2'>
                        <li className='border-b-2 p-2'>Ana Səhifə</li>      
                  <li className='flex border-b-2 p-2 items-center '>Haqqımızda <span onClick={() => handleToggle('Haqqımızda')} className='text-white mx-2 bg-[#ff8300] p-1'><FaPlus /></span>
                  </li>
                  <ul className={ ` ${ dropdown === 'Haqqımızda' ? 'h-[50px]' : 'h-[0px]' } overflow-hidden duration-500 border-b px-3`}>
                          <li>Siyasətimiz</li>
                          <li>Yeniliklər</li>
                    </ul>
                  <li className='flex border-b-2 p-2 items-center'>Aksiyalar <span onClick={() => handleToggle('Aksiyalar')} className='text-white mx-2 bg-[#ff8300] p-1'><FaPlus /></span> 
                  </li> 
                  <ul className={ ` ${ dropdown === 'Aksiyalar' ? 'h-[80px]' : 'h-[0px]' } overflow-hidden duration-500 border-b px-3`}>
                    <li>Kampaniyalar</li>
                    <li>Neptun Bonus Kart</li>
                    <li>Elektron Kataloq</li>
                    </ul>
                  <li className='flex border-b-2 p-2 items-center whitespace-nowrap'>Super Marketlər <span onClick={() => handleToggle('SuperMarket')} className='text-white mx-2 bg-[#ff8300] p-1'><FaPlus /></span>
                  </li>
                    <ul className={ ` ${dropdown === 'SuperMarket' ? 'h-[120px]' : 'h-[0px]'} overflow-hidden duration-500 border-b px-3`}>
                        <li>Mağazalaramız</li>
                        <li>İrad Və Təkliflər</li>
                        <li>Alıcıların Nəzərinə</li>
                        <li>Partnyorluq</li>
                        <li>Tərəfdaşlar</li>
                    </ul>
                  <li className='flex border-b-2 p-2 items-center'>Karyera <span onClick={() => handleToggle('Karyera')} className='text-white mx-2 bg-[#ff8300] p-1'><FaPlus /></span>
                  </li>
                    <ul className={ ` ${ dropdown === 'Karyera' ? 'h-[70px]' : 'h-[0px]' } overflow-hidden duration-500 border-b px-3`}>
                            <li>İşə Qəbul Proseduru</li>
                            <li>Vakansiyalar</li>
                            <li>CV Yerləşdirin</li>
                    </ul>
                    <li className='border-b-2 p-2'>Əlaqə</li>      
                    </ul>
        </div>
          
        <span className='text-[#ff8300] p-1 rounded-md  text-xl bg-white lg:hidden'  onClick={() => setOpenSidebar(!open)}>
            <FaBars />
        </span>
          
    </nav>
  );
}

export default Navbar;
