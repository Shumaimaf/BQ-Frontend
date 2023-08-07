import React, { useContext, useState } from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Admin from './Admin';
import Guest from './Guest';
import Users from './Users';
import { GlobalContext } from './Context/context';

const componentsByRoles = {
  'admin': Admin,
  'user': Users,
  'guest': Guest
};

const getUserRole = (role) => componentsByRoles[role] || componentsByRoles['guest'];

export default function App() {
  const [state, dispatch] = useContext(GlobalContext) 
  const [role, setRole] = useState('guest');

  const decodeUser = (token) => {
    if (!token) {
      return undefined
    }
    else {
      const res = decodeToken(token)
      return res?.role
    }
  }

  const currentToken = decodeUser(state.token)
  const CurrentUser = getUserRole(currentToken);


  return (
    <BrowserRouter>
      <div>
        <CurrentUser/>
      </div>
    </BrowserRouter>
  );
}
