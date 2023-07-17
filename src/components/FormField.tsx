import React, { ChangeEvent, ChangeEventHandler } from 'react';

interface FormFieldProps {
    label: string;
    value: any;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    name: string;
    inputType: string;
    placeHolder: string;
    isEditable: string;
    handleEdit: ChangeEventHandler<HTMLInputElement>;
    onBlur: ChangeEventHandler<HTMLInputElement>
}

const FormField: React.FC<FormFieldProps> = ({ label, value, handleChange, name, inputType, placeHolder, isEditable, handleEdit, onBlur }) => {
  return (
    <div className='flex flex-row justify-between mb-[15px] w-full'>
        <label className='font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mr-[10px] mt-[5px]'>{label}:</label>
        {isEditable ? (<input 
          type={inputType}
          name={name}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          value={value}
          onChange={handleChange}
          placeholder={placeHolder}
          onBlur={onBlur}
          className='py-[5px]  outline-none border-[1px] 
            border-[#3a3a43] bg-transparent font-epilogue text-white 
            text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]'
        />) : (<p className='text-white'>{value}</p>)}
        {!isEditable && <p className='text-underline text-[#4b5264] underline cursor-pointer' onClick={handleEdit}>Edit</p>}
      </div>
  )
}

export default FormField