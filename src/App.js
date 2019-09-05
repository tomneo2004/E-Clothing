import React,{Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './Components/header/header.component';
import HomePage from './Pages/HomePage/homepage.component';
import ShopPage from './Pages/ShopPage/shop.component';
import SigninSignupPage from './Pages/SigninSignupPage/sign-in-sign-up.component';
import {Auth} from './firebase/firebase.utils';


class App extends Component {
  
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){

    this.unsubscribeFromAuth = Auth.onAuthStateChanged((user)=>{
      
      this.setState({currentUser:user});
      console.log(user);
    })
  }

  componentWillUnmount(){

    this.unsubscribeFromAuth();
  }

  render(){

    return (

      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin-signup' component={SigninSignupPage} />
        </Switch>
      </div>
  
    );
  }
}

export default App;
