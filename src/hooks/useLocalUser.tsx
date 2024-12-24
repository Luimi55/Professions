import React from 'react'
import UserModel from '../models/UserModel';
import LocalStorageKey from '../enums/LocalStorageKey';

type Props = {}

const useLocalUser = () => {

    const setUser = (user : UserModel) => {
        const userString = JSON.stringify(user);
        const userEncrypted = btoa(userString);
        localStorage.setItem(LocalStorageKey.profUserInfo, userEncrypted)
    }

    const getUser =():UserModel|null => {
        const userEncrypted = localStorage.getItem(LocalStorageKey.profUserInfo);
        if(userEncrypted != null){
            const userString = atob(userEncrypted);
            const user = JSON.parse(userString)
            return user;
        }
        return null
    }

  return {
    setUser,
    getUser
  }
}

export default useLocalUser