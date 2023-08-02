import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Users/pages/Home';
import Page404 from './Users/pages/Page404';
import Admin from './Admin/App';
import Users from './Users/App';
import Signup from './Users/pages/Signup';
import Login from './Users/pages/Login';
import CategoriesSection from './Users/pages/CategoriesSection';
import ProductCategoryPage from './Users/pages/ProductCategorypage';
import ProductPage from './Users/pages/ProductPage';
import Products from './Users/pages/Products';
import { GlobalContext } from './Context/context';
import GuestNav from './GuestNav'


export default function App() {
  const role = 'admin';

  // const { state, dispatch } = useContext(GlobalContext)

  // useEffect(() => (
  //   console.log("Getting from user", role)
  // ), [])

  return (
    <BrowserRouter>
      {role === 'admin' ? (
        <Admin />
      ) : role === 'user' ? (
        <Users />
      ) : (
        <>
        {/* <GuestNav/> */}
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products/categories" element={<CategoriesSection />} />
            <Route path="/products/categories/:categoryName" element={< ProductCategoryPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productID" element={<ProductPage />} />
          </Routes>
        </>
      )
      }
    </BrowserRouter >
  );
}
