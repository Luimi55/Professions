import React from 'react'
import { Outlet, Navigate } from "react-router-dom";
import useAuth from './useAuth';
import TopBar from '../../components/TopBar';

type Props = {}

const RequireAuth = () => {
  const {isAuthenticated} = useAuth();
  return (
    isAuthenticated()
      ?(<><TopBar/><Outlet/></>)//If is authenticated return TopBar and Children
      :<Navigate to="/LogIn"/>//TODO: Cambiar a login luego
  )
}

export default RequireAuth