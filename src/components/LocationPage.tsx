import React,{ useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import Navbar from './Navbar';
import Filters from './Filters';
import LocationCard from './LocationCard';
import { TENANT } from '../constants';

interface LocationPageProps {

}

const dummyLocation = [
    {firstName: "Raghav", lastName: "Raman", coordinates: "1212344.76355", date: "Jan 08", time: "5:12 PM", duration: 1},
    {firstName: "Kunal", lastName: "Shah", coordinates: "1212344.76355", date: "Mar 03", time: "2:53 PM", duration: 0.2},
    {firstName: "Elon", lastName: "Raman", coordinates: "1212344.76355", date: "Apr 02", time: "9:45 AM", duration: 0.4},
    {firstName: "Vishal", lastName: "Goyal", coordinates: "1212344.76355", date: "May 05", time: "10:23 PM", duration: 1.2},
    {firstName: "Deepinder", lastName: "Goyal", coordinates: "1212344.76355", date: "Dec 08", time: "7:12 PM", duration: 0.4}
]

const GET_LOCATION = gql`
query LocationList($tenant: String!) {
    locationList(tenant: $tenant) {
      resources {
        name
        updatedAt
        telecom {
          value
        }
        alias
        address
        id
      }
    }
  }`

const LocationPage: React.FC<LocationPageProps> = () => {
    const [search, setSearch] = useState("");
    const [locationList, setLocationList] = useState([])
    const { error, data, loading } = useQuery(GET_LOCATION, {
        variables: {
            tenant: TENANT
        },
        onCompleted: (data) => {
            console.log(data);
            setLocationList(data?.locationList?.resources);
        }
    });
    const navigate = useNavigate()

    const handleClick = (id: string) => {
        navigate(`/${id}`)
    }
    
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
            {locationList.length > 0 && locationList.map((location) => (
                <LocationCard 
                    firstName={location.name}
                    lastName={``}
                    coordinates={location.updatedAt}
                    date={`06 Jan`}
                    time={location.updatedAt}
                    duration={`0.2`}
                    onClick={() => handleClick(location.id)}
                />
            ))}

        </div>

    </div>
  )
}

export default LocationPage