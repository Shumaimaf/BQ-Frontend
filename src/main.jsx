import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './Users/context/addtoCart/context.jsx';
import GlobalContextProvider from './Context/context.jsx';
import Button from 'react-bootstrap/Button';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <React.StrictMode>
      <GlobalContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GlobalContextProvider>
    </React.StrictMode>
  </CartContextProvider>
);
