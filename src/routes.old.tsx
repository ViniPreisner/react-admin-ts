
import React, { useContext, useState } from 'react'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    RouteProps
} from 'react-router-dom'
import Login from './pages/auth/Login'
import Main from './pages/main/Main'
import Users from './pages/users/Users'
import Navbar from './Components/navbar/Navbar'
import Sidebar from './Components/sidebar/Sidebar'
import AuthContext from './context/AuthContext'

type Props = {
    path: string;
  };

type ProtectedRouteProps = {
    //isAuthenticated: boolean;
    //authenticationPath: string;
} & RouteProps

const PrivateRoute = ( { ...routeProps}: ProtectedRouteProps ) => {

    const { signed } = useContext(AuthContext)

    const [sidebarOpen, setSidebarOpen] = useState(false)
  
    const openSidebar = () => {
    setSidebarOpen(true)
    }

    const closeSidebar = () => {
    setSidebarOpen(false)
    }

    return (
        <div className="container__main">
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
            {signed ? (
                <Route {...routeProps} />
            ) : (
                <Redirect to={{ pathname: '/auth/login' }} />
            )}
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </div>  
    )
}

const Routes = () => {
    
    return (
        <Router>
            <Switch>
                {/*<Route path="/" exact component={Main} />*/}
                <Route path="/auth/login" exact component={Login} />
                <PrivateRoute path="/" exact component={Main} />
                <PrivateRoute path="/users" exact component={Users} />
            </Switch>
        </Router>
    )
}

export default Routes