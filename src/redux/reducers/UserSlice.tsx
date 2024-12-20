import { createSlice } from '@reduxjs/toolkit'
import UserModel from '../../models/UserModel'

const initialState : UserModel = {
    name: '',
    email: '',
    description: '',
    jobTitle: '',
    country: '',
    degree: '',
    degreeFile: '',
    company: '',
    hashtag: '',
    paypalToken: ''
}

export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setUser: (state, action) =>{
            state.name = action.payload.name
            state.email = action.payload.email
            state.description = action.payload.description
            state.jobTitle = action.payload.jobTitle
            state.country = action.payload.country
            state.degree = action.payload.degree
            state.degreeFile = action.payload.degreeFile
            state.company = action.payload.company
            state.hashtag = action.payload.hashtag
            state.paypalToken = action.payload.paypalToken
        },
    }
})

export const {
    setUser,
} = UserSlice.actions

export default UserSlice.reducer