import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './Users/context/addtoCart/context.jsx';
import GlobalContextProvider from './Context/context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <React.StrictMode>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </React.StrictMode>
  </CartContextProvider>
);
