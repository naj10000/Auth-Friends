import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
      </ul>
      <Switch>
        <PrivateRoute path="/protected" component={FriendsList}/>
    <Route path="/login" component={Login} />
    <Route component={Login}/>

      </Switch>
    
    </div>
  );
}

export default App;
