import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Main from './pages/main/Main';
import Navbar from './Components/navbar/Navbar';
import Sidebar from './Components/sidebar/Sidebar';

import './index.css';
import Users from './pages/users/Users';
import Login from './pages/auth/Login';
import { AuthProvider } from './context/AuthContext';
import Routes from './routes';

type Props = {

}

const App = (props: Props) => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const openSidebar = () => {
    setSidebarOpen(true)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className="">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
