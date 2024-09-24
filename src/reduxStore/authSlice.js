import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    isLogedin: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action) => {
            state.user = action.payload
        },
        login: (state, action) => {
            if (state.user.email === action.payload.email && state.user.password === action.payload.password) {
                state.isLogedin = true
                return state
            } else {
                state.isLogedin = false
                return state
            }
        },
        logout: (state) => {
            state.user=null
             state.isLogedin = false
            return state
         }
    }
})

export const {register, login, logout } = authSlice.actions

export default authSlice.reducer
