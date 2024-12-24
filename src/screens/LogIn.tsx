import React, {useState, useEffect} from 'react'
import { useGoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import {
    Button
  } from "@fluentui/react-components";
  import axios from 'axios';
import useGoogleApi from '../hooks/useGoogleApi';
import UserModel from '../models/UserModel';
import useLocalUser from '../hooks/useLocalUser'

type Props = {}

const LogIn = (props: Props) => {

    const navigate = useNavigate();
    const {getUserInfoAsync} = useGoogleApi();
    const localUser = useLocalUser();

    const login = useGoogleLogin({
        onSuccess: (loginRes) => {
            getUserInfoAsync(loginRes).then((infoRes)=>{
                const user : UserModel = {
                    name: infoRes.data.name,
                    email: infoRes.data.email
                }
                localUser.setUser(user)
                //TODO: Chequear si correo esta en DB
                navigate("/SignUp")
            })
        },
        onError: (error) => console.log('Login Failed:', error)
    });



  return (
    <div>
        LogIn
        <Button onClick={() => login()}>Sign in with Google 🚀</Button>
    </div>
  )
}

export default LogIn