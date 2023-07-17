import React,{ useState } from 'react';
import Navbar from './Navbar';
import Filters from './Filters';
import LocationCard from './LocationCard';

interface LocationPageProps {

}

const dummyLocation = [
    {firstName: "Raghav", lastName: "Raman", coordinates: "1212344.76355", date: "Jan 08", time: "5:12 PM", duration: 1},
    {firstName: "Kunal", lastName: "Shah", coordinates: "1212344.76355", date: "Mar 03", time: "2:53 PM", duration: 0.2},
    {firstName: "Elon", lastName: "Raman", coordinates: "1212344.76355", date: "Apr 02", time: "9:45 AM", duration: 0.4},
    {firstName: "Vishal", lastName: "Goyal", coordinates: "1212344.76355", date: "May 05", time: "10:23 PM", duration: 1.2},
    {firstName: "Deepinder", lastName: "Goyal", coordinates: "1212344.76355", date: "Dec 08", time: "7:12 PM", duration: 0.4}
]

const LocationPage: React.FC<LocationPageProps> = () => {
    const [search, setSearch] = useState("");
  return (
    <div className='w-full'>
        <div className='flex flex-col justify-around'>
            <Navbar />
            <input 
                type='text' 
                value={search} 
                onChange={(e) => setSearch(e?.currentTarget.value)} 
                className='mt-[10px] py-[5px] px-[10px] outline-none border-[1px] border-black'
                placeholder='Search'
            />
            <Filters />
            {dummyLocation.map((location) => (
                <LocationCard 
                    firstName={location.firstName}
                    lastName={location.lastName}
                    coordinates={location.coordinates}
                    date={location.date}
                    time={location.time}
                    duration={location.duration}
                />
            ))}

        </div>

    </div>
  )
}

export default LocationPage