import React,{Component} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SigninWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class Signin extends Component{

    constructor(){
        super();

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = (evt)=>{

        evt.preventDefault();

        this.setState({email:'', password:''});
    }

    handleChange = (evt)=>{

        const {value , name} = evt.target;
        this.setState({[name]:value});
    }

    render(){

        return (

            <div className='signin'>
                <h1 className='title'>{'I already have account'}</h1>
                <span>{'Sign in with your email and password'}</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    handleChange={this.handleChange}
                    label='email' 
                    type='email' name='email' value={this.state.email} required />

                    <FormInput
                    handleChange={this.handleChange}
                    label='password' 
                    type='password' name='password' value={this.state.password} required />

                    <div className='button'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={SigninWithGoogle} isGoogleSignin>Sign in with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default Signin;