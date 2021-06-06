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
import Main from '../pages/main/Main'
import Users from '../pages/users/Users'

type ProtectedRouteProps = {
    //isAuthenticated: boolean;
    //authenticationPath: string;
} & RouteProps

const PrivateRoute = ({ ...routeProps }: ProtectedRouteProps) => {

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
            <Route {...routeProps} />
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </div>
    )
}

const AppRoutes: React.FC = () => {

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
            <Router>
                <Switch>
                    {/*<PrivateRoute path="/" exact component={Main} />
                    <PrivateRoute path="/users" exact component={Users} />*/}
                    <Route path="/" exact component={Main} />
                    <Route path="/users" exact component={Users} />
                </Switch>
            </Router>
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </div>

    )
}

export default AppRoutes