import React from 'react'
import Sidebar from './Sidebar'
import NavBar from './NavBar'

export default function Layout({ children }) {
  return (
    <div className='flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300'>
      <Sidebar />
      
      <div className='flex-1 ml-0 lg:ml-64'>
        <NavBar />
        
        <main className='p-4 lg:p-6'>
          {children}
        </main>
      </div>
    </div>
  )
}