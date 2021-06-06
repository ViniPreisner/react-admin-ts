import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import App from '../App'
import AuthContext from '../context/AuthContext'
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

const Routes: React.FC = () => {  
    const { signed } = useContext(AuthContext)
    console.log('signed', signed)

    /*
    if (!signed) {
        <Redirect to={{ pathname: '/auth/login' }} />
    }
    */

    return signed ? <AppRoutes /> : <AuthRoutes />

}

export default Routes