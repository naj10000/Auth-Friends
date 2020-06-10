import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute'
import AddFriends from './components/AddFriends';

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
      </ul>
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList}/>
    <Route path="/login" component={Login} />
    <Route component={Login}/>

      </Switch>
      <Route exact path="/add-friend" component={AddFriends}/>
    
    </div>
  );
}

export default App;
