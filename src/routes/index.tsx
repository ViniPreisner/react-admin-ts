import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import App from '../App'
import { useAuth } from '../context/AuthContext'
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

const Routes: React.FC = () => {  
    const { signed } = useAuth()
    console.log('signed', signed)

    return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes