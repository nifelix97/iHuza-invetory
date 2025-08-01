import React, { useState } from 'react'
import { useProduct } from '../hooks/useProduct'
import Button from '../components/Button'
import ProductModel from '../components/ProductModel'
import Layout from '../components/Layout'

export default function ProductPage() {
  const { products } = useProduct()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Layout>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Product List</h1>
        <Button 
          label="Add Product" 
          variant="primary" 
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-primary-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{product.productTitle}</h2>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                product.stock === 'In Stock' ? 'bg-green-100 text-green-800' :
                product.stock === 'Out of Stock' ? 'bg-red-100 text-red-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {product.stock}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{product.productName}</p>
            
            {product.productImage && (
              <img
                src={product.productImage}
                alt={product.productName}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
            )}
            
            {product.stockquantity !== undefined && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Stock Quantity: {product.stockquantity}
              </p>
            )}
            
            {product.createdAt && (
              <p className="text-xs text-gray-500">
                Created: {new Date(product.createdAt).toLocaleDateString()}
              </p>
            )}
          </div>
        ))}
      </div>

      <ProductModel 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Layout>
  )
}