import React,{Component, useEffect, lazy, Suspense} from 'react';
// import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './Components/header/header.component';
// import HomePage from './Pages/HomePage/homepage.component';
// import ShopPage from './Pages/ShopPage/shop.component';
// import CheckoutPage from './Pages/CheckoutPage/checkoutpage.component';
// import SigninSignupPage from './Pages/SigninSignupPage/sign-in-sign-up.component';
import {Auth, CreateUserProfile} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {CheckUserSession} from './Redux/user/user.actions';
import {createStructuredSelector} from 'reselect';
import {SelectCurrentUser} from './Redux/user/user.selector';
import Spinner from './Components/with-spinner/with-spinner.component';
import ErrorBoundary from './Components/error-boundary/error-boundary.component';

import {GlobalStyle} from './global.style';

const HomePage = lazy(()=>import('./Pages/HomePage/homepage.component'));
const ShopPage = lazy(()=>import('./Pages/ShopPage/shop.component'));
const CheckoutPage = lazy(()=>import('./Pages/CheckoutPage/checkoutpage.component'));
const SigninSignupPage = lazy(()=>import('./Pages/SigninSignupPage/sign-in-sign-up.component'));

const App = ({checkUserSession, currentUser}) => {
  
  useEffect(()=>{
    checkUserSession();

  }, [checkUserSession]);

  return (

    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin-signup' render={()=>
              currentUser? 
              (<Redirect to='/' />)
              : 
              (<SigninSignupPage />)} 
              />
          </Suspense>
        </ErrorBoundary>
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
