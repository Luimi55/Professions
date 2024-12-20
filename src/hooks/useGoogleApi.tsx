import React from 'react'
import axios from 'axios';


const  useGoogleApi = () => {

    const BASE_URL = "https://www.googleapis.com/oauth2/v1/";

    const getUserInfoAsync = async (user: any)=> {
        return axios.get(`${BASE_URL}userinfo?access_token=${user.access_token}`, {
            headers: {
                Authorization: `Bearer ${user.access_token}`,
                Accept: 'application/json'
            }
        })
    }

  return {
    getUserInfoAsync
  }
}

export default useGoogleApi