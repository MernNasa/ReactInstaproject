import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouting = ({children}) => {
    const jwt_token=JSON.parse(localStorage.getItem("jwt_token"))
    return jwt_token ? children : <Navigate to="/login"/>
}

export default PrivateRouting