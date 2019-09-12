import React,{Component} from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './Components/header/header.component';
import HomePage from './Pages/HomePage/homepage.component';
import ShopPage from './Pages/ShopPage/shop.component';
import CheckoutPage from './Pages/CheckoutPage/checkoutpage.component';
import SigninSignupPage from './Pages/SigninSignupPage/sign-in-sign-up.component';
import {Auth, CreateUserProfile} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {SetCurrentUser} from './Redux/user/user.actions';
import {createStructuredSelector} from 'reselect';
import {SelectCurrentUser} from './Redux/user/user.selector';


class App extends Component {
  

  unsubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = Auth.onAuthStateChanged(async userAuth=>{
      
      if(userAuth){

        const userRef = await CreateUserProfile(userAuth);

        userRef.onSnapshot(snapshot=>{
          
          setCurrentUser({
            id:snapshot.id,
            ...snapshot.data()
          });
        });
      }
      else{

        setCurrentUser(userAuth);
      }

    })
  }

  componentWillUnmount(){

    this.unsubscribeFromAuth();
  }

  render(){

    return (

      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin-signup' render={()=>
            this.props.currentUser? 
            (<Redirect to='/' />)
            : 
            (<SigninSignupPage />)} 
            />
        </Switch>
      </div>
  
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser:SelectCurrentUser
});

const mapDispatchToProps = (dispatch)=>({
  setCurrentUser: (user)=>dispatch(SetCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
