import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { isLogedin } = useSelector((state) => state.auth)

    return isLogedin ? children : <Navigate to="/login" />
}

export default PrivateRoute
