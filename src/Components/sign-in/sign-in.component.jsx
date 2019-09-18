import React,{Component} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SigninWithGoogle} from '../../firebase/firebase.utils';
import {Auth} from '../../firebase/firebase.utils';
import {SignInContainer, Title, ButtonContainer} from './sign-instyles';

class Signin extends Component{

    constructor(){
        super();

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = async (evt)=>{

        evt.preventDefault();

        const{email, password} = this.state;

        try {

            await Auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
            
        } catch (error) {
            
            console.log('sign in with email and password error '+error);
        }
        
    }

    handleChange = (evt)=>{

        const {value , name} = evt.target;
        this.setState({[name]:value});
    }

    render(){

        return (

            <SignInContainer>
                <Title>{'I already have account'}</Title>
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

                    <ButtonContainer>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={SigninWithGoogle} isGoogleSignin>Sign in with Google</CustomButton>
                    </ButtonContainer>
                    
                </form>
            </SignInContainer>
        );
    }
}

export default Signin;