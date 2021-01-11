import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

export default function App() {
  return (
    <div>
      <Switch>
        {/* <Route path="/carteira" component={ Wallet } /> */}
        <Route exact path="/" component={ Login } />
      </Switch>
    </div>
  );
}
