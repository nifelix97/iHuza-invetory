import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from '../pages/auth/Login'
import Dashboard from '../components/Dashboard' 
import ProductPage from '../pages/ProductPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import UserPage from '../pages/UserPage'
import CategoryPage from '../pages/CategoryPage'


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/category" element={<CategoryPage />} />
    </Routes>
  )
}