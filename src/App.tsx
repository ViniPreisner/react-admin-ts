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
    <Router>
    <div className="container__main">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/users" exact component={Users} />
        </Switch>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
    </Router>
  );
}

export default App;
