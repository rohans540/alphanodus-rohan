import React from 'react'
import calender from "../assets/images/calender.svg";
import clock from "../assets/images/clock.svg";

interface LocationCardProps {
    firstName: string;
    lastName: string;
    coordinates: string;
    date: string;
    time: string;
    duration: number;
}

const LocationCard: React.FC<LocationCardProps> = ({ firstName, lastName, coordinates, date, time, duration }) => {
  return (
    <div className='flex flex-col items-center border-[1px] border-black mt-4 p-2 w-full rounded-[2px]'>
        <div className='flex flex-row justify-between font-epilogue font-[8px] w-full'>
            <h3 className='ml-[8px]'>{firstName} {lastName}</h3>
            <div className='flex justify-center items-center rounded-full w-[90px] bg-[#eddeb4] mr-[8px]'>Active</div>
        </div>
        <p className='mr-auto pl-[8px]'>{coordinates}</p>

        <div className='flex justify-start mt-4 mr-auto pl-[8px]'>
            <div className='mr-1'>
                <img src={calender} alt='cal-icon' className='mt-1' />
            </div>
            <p>{date}</p>
            <div className='ml-2 mr-1'>
                <img src={clock} alt='clock-icon' className='mt-1' />
            </div>
            <p>{time}</p>
            <p className='ml-[100px]'>{duration}h</p>
        </div>

    </div>
  )
}

export default LocationCard