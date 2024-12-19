import React from 'react'
import { getCookie, setCookie } from 'typescript-cookie'

type Props = {}

const useAuth = () => {

    const isAuthenticated = () => {
        const cookieName = import.meta.env.VITE_SECRET_COOKIE;
        const isAuth = getCookie(cookieName)? true : false;
        console.log(getCookie(cookieName))
        return isAuth
    }

  return {
    isAuthenticated
  }
}

export default useAuth