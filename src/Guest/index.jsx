import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CategoriesSection from '../Users/pages/CategoriesSection';
import ProductCategoryPage from '../Users/pages/ProductCategorypage';
import Products from '../Users/pages/Products';
import Signup from '../Users/pages/Signup';
import Login from '../Users/pages/Login';
import ProductPage from '../Users/pages/ProductPage';
import GuestNav from './components/GuestNav'
import Footersection from '../Users/components/Footersection'
import Home from './pages/Home';


export default function index() {
  return (
    <>
      <div>
        <GuestNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/categories" element={<CategoriesSection />} />
          <Route path="/products/categories/:categoryName" element={< ProductCategoryPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productID" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footersection />
      </div>
    </>
  )
}
