import React from 'react'
import ProductCard from './cards/ProductCard'

export default function Product() {
  return (
   <div className='p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg dark:border dark:border-gray-700 transition-colors duration-300'>
    <h1 className='text-xl font-semibold mb-4 text-gray-900 dark:text-white'>Recent Added Products</h1>
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
        <ProductCard
            productTitle="MacBook Pro 16"
            productName="Laptops"
            createdAt="2023-01-01"
            stock="In Stock"
        />
        <ProductCard
            productTitle="Dell XPS 13"
            productName="Laptops"
            createdAt="2023-02-01"
            stock="In Stock"
        />
        <ProductCard
            productTitle="iPhone 15 Pro"
            productName="Mobile"
            createdAt="2023-03-01"
            stock="Low Stock"
        />
        <ProductCard
            productTitle="iPad Air"
            productName="Tablets"
            createdAt="2023-04-01"
            stock="In Stock"
        />
        <ProductCard
            productTitle="Surface Pro 9"
            productName="Tablets"
            createdAt="2023-05-01"
            stock="Out of Stock"
        />
    </div>
   </div>
  )
}