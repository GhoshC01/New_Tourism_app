import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import tourReducer from './tourSlice'
// import tourDetailsReducer from './tourDetailsSlice'
import passengerReducer from './passengerSlice'

export const store = configureStore({
    reducer:{
        auth: authReducer,
        tours: tourReducer,
        // tourDetails:tourDetailsReducer,
        passenger:passengerReducer
    },
})