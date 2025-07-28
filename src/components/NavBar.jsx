import React from 'react'
import { FiSettings, FiLogOut, FiBell, FiMoon, FiUser, FiSun } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme'

export default function NavBar() {
  const { theme, toggleTheme } = useTheme()
  
  console.log('Current theme is:', theme)

  return (
    <div className='flex items-center justify-between h-16 shadow-sm bg-white dark:bg-gray-800 px-4 sticky top-0 z-30 transition-colors duration-300'>
      <div className='flex flex-col ml-12 lg:ml-0'>
        <h1 className='text-xl lg:text-2xl font-bold text-gray-900 dark:text-white transition-colors'>Dashboard</h1>
        <p className='text-xs lg:text-sm text-gray-600 dark:text-gray-300 hidden sm:block transition-colors'>Welcome Back, Admin</p>
      </div>
      
      <div className='flex items-center gap-2 lg:gap-3'>
        <button 
          onClick={toggleTheme}
          className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <FiMoon size={18} className='text-gray-600 dark:text-gray-300' />
          ) : (
            <FiSun size={18} className='text-gray-600 dark:text-gray-300' />
          )}
        </button>
        
        <button className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'>
          <FiSettings size={18} className='text-gray-600 dark:text-gray-300' />
        </button>
        
        <button className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative'>
          <FiBell size={18} className='text-gray-600 dark:text-gray-300' />
          <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center text-[10px]'>
            
          </span>
        </button>
        
        <button className='flex items-center gap-2 p-1 lg:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'>
          <div className='w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center'>
            <FiUser size={16} className='text-white' />
          </div>
          <span className='text-sm font-medium text-gray-700 dark:text-gray-300 hidden xl:block transition-colors'>Admin@ihuza.com</span>
        </button>
      </div>
    </div>
  )
}