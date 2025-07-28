import React from 'react'

const stockClasses = {
  'In Stock': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  'Out of Stock': 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
  'Low Stock': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
}

export default function ProductCard(
    {
        productTitle,
        productName,
        createdAt,
        stock,
        className = '',
        variant = 'primary',
    }
) {
  return (
    <div className='bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 dark:border hover:shadow-lg transition-all duration-300 dark:border-gray-700'>
        <div className='flex items-center justify-between mb-3'>
            <h2 className='text-lg font-semibold text-gray-900 dark:text-white'>{productTitle}</h2>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${stockClasses[stock] || 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
                {stock}
            </span>
        </div>      
        <p className='text-sm text-gray-600 dark:text-gray-400 mb-2'>{productName}</p>
        <p className='text-sm text-gray-600 dark:text-gray-400 mb-2'>{createdAt}</p>
    </div>
  )
}