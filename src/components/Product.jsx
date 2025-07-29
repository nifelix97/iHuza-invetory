import React from 'react'
import ProductCard from './cards/ProductCard'
import { useProduct } from '../hooks/useProduct'

export default function Product() {
    const { products } = useProduct();
    if (!products || products.length === 0) {
        return <div className='p-4 text-center text-gray-500 dark:text-gray-400'>No products available</div>;
    }
  return (
   <div className='p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg dark:border dark:border-gray-700 transition-colors duration-300'>
    <h1 className='text-xl font-semibold mb-4 text-gray-900 dark:text-white'>Recent Added Products</h1>
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
        {products.map((product) => (
            <ProductCard
                key={product.id}
                productTitle={product.productTitle}
                productName={product.productName}
                createdAt={product.createdAt}
                stock={product.stock}
            />
        ))}
    </div>
   </div>
  )
}