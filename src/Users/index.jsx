import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CategoriesSection from './pages/CategoriesSection';
import ProductCategoryPage from './pages/ProductCategorypage';
import Products from './pages/Products';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';
import NavBar from './components/Navbar'
import Footersection from './components/Footersection'
import Home from './pages/Home';


export default function App() {
    return (
        <>
            <div>
                <NavBar />
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
