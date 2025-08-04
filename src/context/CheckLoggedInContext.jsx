import React, { createContext, useState, useEffect } from 'react'

const CheckLoggedInContext = createContext()

export function CheckLoggedInProvider({ children }) {
  const [user, setUser] = useState(
    [
        {
            id: 1,
            name: 'Admin User',
            email: 'admin@gmail.com',
            password: 'password123'
        }
    ]
  );

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem('isLoggedIn');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <CheckLoggedInContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </CheckLoggedInContext.Provider>
  )
}

export { CheckLoggedInContext }