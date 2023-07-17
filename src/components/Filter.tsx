import React from 'react';

interface FilterProps {
    label: string;
}

const Filter: React.FC<FilterProps> = ({ label }) => {
  return (
    <div className='flex justify-center items-center border-[1px] border-black p-2 bg-[#e8e8e8] w-[80px] h-[30px]'>{label}</div>
  )
}

export default Filter