import React from 'react';
import refreshIcon from "../assets/images/refreshIcon.svg";

const Navbar: React.FC = () => {
  return (
    <div className='flex flex-row justify-around'>
        <div className='flex justify-center items-center border-[1px] border-black rounded-[5px] w-[80px]'>
            <img src={refreshIcon} alt='refresh' className='w-[20px]' />
        </div>
        <span className='px-[20px] font-[50px] font-epilogue font-semibold'>Locations</span>
        <span className='px-[20px] font-[50px] font-semibold'>+</span>
    </div>
  )
}

export default Navbar