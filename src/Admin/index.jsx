import React from 'react'
import AdminNav from './components/AdminNav'
import { Route, Routes } from 'react-router-dom'
import AdminHome from './pages/AdminHome'
import AdminCategory from './pages/AdminCategory'
import AdminBrands from './pages/AdminBrands'

export default function App() {
    return (
        <>
            <AdminNav />
            <div>
                <Routes>
                    <Route path='/' element={<AdminHome />} />
                    <Route path='/admin/home' element={<AdminHome />} />
                    <Route path='/admin/category' element={<AdminCategory />} />
                    <Route path='/admin/brands' element={<AdminBrands />} />
                </Routes>

            </div>
        </>
    )
}
