import React,{Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './Components/header/header.component';
import HomePage from './Pages/HomePage/homepage.component';
import ShopPage from './Pages/ShopPage/shop.component';
import SigninSignupPage from './Pages/SigninSignupPage/sign-in-sign-up.component';
import {Auth, CreateUserProfile} from './firebase/firebase.utils';


class App extends Component {
  
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){

    this.unsubscribeFromAuth = Auth.onAuthStateChanged(async userAuth=>{
      
      if(userAuth){

        const userRef = await CreateUserProfile(userAuth);

        userRef.onSnapshot(snapshot=>{
          
          this.setState({currentUser:{
            id:snapshot.id,
            ...snapshot.data()
          }}, ()=>console.log(this.state));
        });
      }
      else{

        this.setState({currentUser:userAuth});
      }

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
