import React from 'react'
import { HiBars4 } from "react-icons/hi2";
import  Fruit  from "../../assets/icons/fruit.svg";
import  Meat  from "../../assets/icons/meat.svg";
import  Flour  from "../../assets/icons/flour.svg";
import  Jelly  from "../../assets/icons/jelly.svg";
import  Coffe  from "../../assets/icons/coffecup.svg";
import { IoIosArrowForward } from "react-icons/io";




function category() {
  return (
    <div className='absolute top-0 text-black bg-white w-[220px] h-12 rounded'>
      <h1 className='flex text-[#ff8300] items-center font-bold text-[0.8em]'> <span className='p-2 text-[1.2em]'><HiBars4 /></span> Kateqoriyalar</h1>
      <ul>
        <li className='border-b hover:bg-orange-200'><a href="#" className='text-[0.5em] flex items-center font-bold justify-between'><img src={Fruit} alt=" apple" className='p-2' /> Meyvə,tərəvəz, quru meyvə <span className='p-1 '><IoIosArrowForward /></span></a></li>    
        <li className='border-b hover:bg-orange-200'><a href="#" className='text-[0.5em] flex items-center font-bold justify-between '><img src={Meat} alt=" apple" className='p-2' /> Ət, toyuq, dəniz məhsulları <span className='p-1'><IoIosArrowForward /></span></a></li>    
        <li className='border-b hover:bg-orange-200'><a href="#" className='text-[0.5em] flex items-center font-bold justify-between'><img src={Flour} alt=" apple" className='p-2' /> Qastronom<span className='p-1'><IoIosArrowForward /></span></a></li>    
        <li className='border-b hover:bg-orange-200'><a href="#" className='text-[0.5em] flex items-center font-bold justify-between'><img src={Jelly} alt=" apple" className='p-2' /> Ərzaq məhsulları<span className='p-1'><IoIosArrowForward /></span></a></li>    
        <li className='border-b hover:bg-orange-200'><a href="#" className='text-[0.5em] flex items-center font-bold justify-between '><img src={Coffe} alt=" apple" className='p-2' /> Şirniyyat, çay, kofe<span className='p-1'><IoIosArrowForward /></span></a></li>    
      </ul>

    </div>
    
  )
}

export default category