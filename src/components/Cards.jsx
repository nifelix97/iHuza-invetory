import React from 'react'

const variantClasses = {
  primary: 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white  dark:border-gray-700',
  secondary: 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white dark:border-gray-700',
  success: 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white  dark:border-gray-700',
  danger: 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white  dark:border-gray-700',
}

const iconBackgroundClasses = {
  primary: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300',
  secondary: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300',
  success: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300',
  danger: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300',
}

export default function Cards({
    number,
    content,
    variant = 'primary',
    className = '',
    width = 'w-full',
    icon,
    iconBgColor
}) {
  const bgColor = iconBgColor || iconBackgroundClasses[variant];
  
  return (
    <div className='flex gap-4 mt-4'>
      <div className={`p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${variantClasses[variant]} ${className}`}>
        <div className='flex items-center gap-4'>
          {icon && (
            <div className={`rounded-lg size-12 flex items-center justify-center ${bgColor}`}>
              {icon}
            </div>
          )}
          <div className='flex flex-col'>
            <h3 className='text-3xl font-semibold text-gray-900 dark:text-white'>{number}</h3>
            <p className='text-sm text-gray-600 dark:text-gray-400'>{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}