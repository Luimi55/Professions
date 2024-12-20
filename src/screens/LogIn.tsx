import React, {useState, useEffect} from 'react'
import { useGoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import {
    Button
  } from "@fluentui/react-components";
  import axios from 'axios';
import useGoogleApi from '../hooks/useGoogleApi';
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../redux/reducers/UserSlice';
import UserModel from '../models/UserModel';

type Props = {}

const LogIn = (props: Props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {getUserInfoAsync} = useGoogleApi();

    const login = useGoogleLogin({
        onSuccess: (loginRes) => {
            getUserInfoAsync(loginRes).then((infoRes)=>{
                const user : UserModel = {
                    name: infoRes.data.name,
                    email: infoRes.data.email
                }
                dispatch(setUser(user))
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