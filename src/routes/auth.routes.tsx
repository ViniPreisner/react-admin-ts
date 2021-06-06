import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    RouteProps
} from 'react-router-dom'

import Navbar from '../Components/navbar/Navbar'
import Sidebar from '../Components/sidebar/Sidebar'

import Login from '../pages/auth/Login'

const AuthRoutes: React.FC = () => {

    return (

        <Router>
            <Switch>
                <Route path="/auth/login" exact component={Login} />
            </Switch>
        </Router>


    )
}

export default AuthRoutes