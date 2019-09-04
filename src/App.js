import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage/homepage.component';
import ShopPage from './Pages/ShopPage/shop.component';


function App() {
  return (

    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
    </Switch>
  );
}

export default App;
