import React from 'react';
import { decodeToken } from 'react-jwt';
import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import Admin from './Admin';
import Guest from './Guest';
import Users from './Users';
import { GlobalContext } from './Context/context';

const componentsByRoles = {
  'admin': Admin,
  'user': Users,
  'guest': Guest
};

const getUserRole = (params) => componentsByRoles[params] || componentsByRoles['guest'];


export default function App() {
  const { state, dispatch } = useContext(GlobalContext)

  const decodeUser = (token) => {
    if (!token) {
      return undefined;
    } else {
      const res = decodeToken(token);
      return res?.role;
    }
  }

  const CurrentToken = decodeUser(state.token);
  const CurrentUser = getUserRole(CurrentToken);
  return <CurrentUser />
}

