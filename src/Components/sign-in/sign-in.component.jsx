import React,{Component, useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SigninWithGoogle} from '../../firebase/firebase.utils';
import {Auth} from '../../firebase/firebase.utils';
import {SignInContainer, Title, ButtonContainer} from './sign-instyles';

const Signin = ()=>{

    const[userCredentials, setUserCredentials] = useState({
        email:'',
        password:''
    });

    const{email, password} = userCredentials;
    const handleSubmit = async (evt)=>{

        evt.preventDefault();

        try {

            await Auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
            
        } catch (error) {
            
            console.log('sign in with email and password error '+error);
        }
        
    }

    const handleChange = (evt)=>{

        const {value , name} = evt.target;
        setUserCredentials({...userCredentials, [name]:value});
    }

    return (

        <SignInContainer>
            <Title>{'I already have account'}</Title>
            <span>{'Sign in with your email and password'}</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                handleChange={handleChange}
                label='email' 
                type='email' name='email' value={email} required />

                <FormInput
                handleChange={handleChange}
                label='password' 
                type='password' name='password' value={password} required />

                <ButtonContainer>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton onClick={SigninWithGoogle} isGoogleSignin>Sign in with Google</CustomButton>
                </ButtonContainer>
                
            </form>
        </SignInContainer>
    );
}

export default Signin;