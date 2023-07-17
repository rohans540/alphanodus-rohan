import React, {ChangeEventHandler, useState, useEffect} from 'react';

import FormField from './FormField';

interface LocationDetailsProps {

}

type HTMLEEventProps = {
  name: string;
  value: any;
}

const initialState = {
  firstName: {value: "", isEdit: false},
  lastName: {value: "", isEdit: false},
  coordinates: {value: "", isEdit: false},
  date: {value: "", isEdit: false},
  time: {value: "", isEdit: false},
  duration: {value: "", isEdit: false}
}

const LocationDetail: React.FC<LocationDetailsProps> = () => {
  const [form, setForm] = useState(initialState);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event: ChangeEventHandler<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { name, value }: HTMLEEventProps = event?.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value
      }
    }));
  }
  const handleEdit = (key: string) => {
    setForm((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        isEdit: !prevState[key].isEdit
      }
    }))
  }

  const onSave = (key: string) => {
    setForm((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        isEdit: !prevState[key].isEdit
      }
    }))
  }
  return (
    <div className='w-full bg-[#e8e8e8] flex flex-col justify-start items-start p-8 bg-[#1c1c24]'>
      <FormField 
        label='First Name'
        name='firstName'
        inputType='text'
        value={form.firstName.value}
        placeHolder="First Name"
        handleChange={handleChange}
        handleEdit={() => handleEdit("firstName")}
        isEditable={form.firstName.isEdit}
        onBlur={() => onSave("firstName")}
      />
      <FormField 
        label='Last Name'
        name='lastName'
        inputType='text'
        value={form.lastName.value}
        placeHolder="Last Name"
        handleChange={handleChange}
        handleEdit={() => handleEdit("lastName")}
        isEditable={form.lastName.isEdit}
        onBlur={() => onSave("lastName")}
      />
      <FormField 
        label='Coordinates'
        name='coordinates'
        inputType='text'
        value={form.coordinates.value}
        placeHolder="Coordinates"
        handleChange={handleChange}
        handleEdit={() => handleEdit("coordinates")}
        isEditable={form.coordinates.isEdit}
        onBlur={() => onSave("coordinates")}
      />
      <FormField 
        label='Date'
        name='date'
        inputType='text'
        value={form.date.value}
        placeHolder="Date"
        handleChange={handleChange}
        handleEdit={() => handleEdit("date")}
        isEditable={form.date.isEdit}
        onBlur={() => onSave("date")}
      />
      <FormField 
        label='Time'
        name='time'
        inputType='text'
        value={form.time.value}
        placeHolder="Time"
        handleChange={handleChange}
        handleEdit={() => handleEdit("time")}
        isEditable={form.time.isEdit}
        onBlur={() => onSave("time")}
      />
      
    </div>
  )
}

export default LocationDetail