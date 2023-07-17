import React from 'react';
import Filter from './Filter';

interface FiltersProps {

}

const filters = [
    {label: "Filter 1"},
    {label: "Filter 2"},
    {label: "Filter 3"},
    {label: "Filter 4"}
]

const Filters: React.FC<FiltersProps> = () => {
  return (
    <div className='flex flex-row justify-around mt-[10px]'>
        {filters.map((filter) => (
            <Filter label={filter.label} />
        ))}
    </div>
  )
}

export default Filters