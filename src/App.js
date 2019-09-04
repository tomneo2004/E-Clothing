import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './Components/header/header.component';
import HomePage from './Pages/HomePage/homepage.component';
import ShopPage from './Pages/ShopPage/shop.component';


function App() {
  return (

    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>

  );
}

export default App;
