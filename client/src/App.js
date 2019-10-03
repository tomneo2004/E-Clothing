import React,{Component, useEffect} from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './Components/header/header.component';
import HomePage from './Pages/HomePage/homepage.component';
import ShopPage from './Pages/ShopPage/shop.component';
import CheckoutPage from './Pages/CheckoutPage/checkoutpage.component';
import SigninSignupPage from './Pages/SigninSignupPage/sign-in-sign-up.component';
import {Auth, CreateUserProfile} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {CheckUserSession} from './Redux/user/user.actions';
import {createStructuredSelector} from 'reselect';
import {SelectCurrentUser} from './Redux/user/user.selector';


const App = ({checkUserSession, currentUser}) => {
  
  useEffect(()=>{
    checkUserSession();

  }, [checkUserSession]);

  return (

    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin-signup' render={()=>
          currentUser? 
          (<Redirect to='/' />)
          : 
          (<SigninSignupPage />)} 
          />
      </Switch>
    </div>

  );
}

const mapStateToProps = createStructuredSelector({
  currentUser:SelectCurrentUser
});

const mapDispatchToProps = (dispatch)=>({
  checkUserSession: ()=>dispatch(CheckUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
