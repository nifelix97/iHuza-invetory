import React from 'react'
import { useCategory } from '../hooks/useCategory'
import Layout from '../components/Layout'
import Button from '../components/Button'

export default function CategoryPage() {
  const { categories } = useCategory()

  return (
    <Layout>
      <div className='mb-6 flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>Categories</h1>
        <Button 
          label="Add Category" 
          variant="primary" 
          onClick={() => alert('Add Category functionality not implemented yet')}
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <div key={category.id} className="bg-primary-200 dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="text-primary-600 dark:text-primary-400 mb-3">
                  {category.icon}
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{category.name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Category
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No categories found</p>
          </div>
        )}
      </div>
    </Layout>
  )
}