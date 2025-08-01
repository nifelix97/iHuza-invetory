import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Layout from '../components/Layout'
import Button from '../components/Button'

export default function UserPage() {
  const { users } = useContext(UserContext)

  return (
    <Layout>
      <div className='mb-6'>
       <div className="flex items-center justify-between mb-4 bg-primary-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
         <h1 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>User Management</h1>
            <Button 
            label="Add User" 
            variant="primary" 
            onClick={() => alert('Add User functionality not implemented yet')}
          />
       </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users && users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="bg-primary-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{user.name}</h2>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  user.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {user.status}
                </span>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Role:</strong> {user.role}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  <strong>Last Login:</strong> {user.lastLogin}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No users found</p>
          </div>
        )}
      </div>
    </Layout>
  )
}