import React from 'react'


const variantClasses = {
    primary: 'text-primary-700 hover:bg-primary-300 bg-primary-200',
    secondary: 'bg-gray-500 hover:bg-gray-600',
}

export default function InPuts({
    label,
    name,
    value,
    onChange,
    placeholder,
    type = 'text',
    className,
    variant = 'default', 
}) {
  return (
    <div className='flex flex-col gap-4' >
        {
            label && (
                <label htmlFor={name} className='text-primary-600 font-medium'>{label}</label>)
        }
        <input type={type} 
        name={name} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
        className={`border border-primary-50 rounded-md p-2 ${className} ${variantClasses[variant]}`} />
    </div>
  )
}
    