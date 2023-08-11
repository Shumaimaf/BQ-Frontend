import React, { useState } from 'react'; // Added { useState }
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signup'; // Import Signin component
import Page404 from '../Users/pages/Page404';
import CategoriesSection from '../Users/pages/CategoriesSection';
import ProductCategoryPage from '../Users/pages/ProductCategorypage';
import Products from '../Users/pages/Products';
import ProductPage from '../Users/pages/ProductPage';
import GuestNav from './components/GuestNav';
import Login from './pages/Login';

export default function Users() {
  const [user, setUser] = useState(false);

  return (
    <>
      <GuestNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin setUser={setUser} />} /> {/* Changed to Signin */}
        {user ? (
          <>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productID" element={<ProductPage />} />
            <Route path="/products/category/:categoryName" element={<CategoriesSection />} />
            <Route path="/products/category/:categoryName" element={<ProductCategoryPage />} /> {/* Changed to ProductCategoryPage */}
          </>
        ) : (
          <Route path="*" element={<Navigate to="/signin" replace={true} />} />
        )}
        <Route path="/*" element={<Page404 />} /> {/* Changed to "/*" */}
      </Routes>
    </>
  );
}
