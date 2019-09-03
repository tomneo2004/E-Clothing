import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage/homepage.component';
import HatsPage from './Pages/HatsPage/hats.component';

function App() {
  return (

    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/hats' component={HatsPage} />
    </Switch>
  );
}

export default App;
