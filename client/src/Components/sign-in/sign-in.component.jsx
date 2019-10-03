import React,{Component, useState} from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SigninWithGoogle} from '../../firebase/firebase.utils';
import {GoogleSignInStart, EmailSignInStart} from '../../Redux/user/user.actions.js';
import {Auth} from '../../firebase/firebase.utils';
import {SignInContainer, Title, ButtonContainer} from './sign-instyles';
import {createStructuredSelector} from 'reselect';
import {SelectUserError} from '../../Redux/user/user.selector';
import {ErrorMsg} from '../sign-up/sign-up.styles';

const Signin = ({googleSigninStart, emailSigninStart, userError})=>{

    const[userCredentials, setUserCredentials] = useState({
        email:'',
        password:''
    });

    const{email, password} = userCredentials;
    const handleSubmit = async (evt)=>{

        evt.preventDefault();

        emailSigninStart(email, password);

        // try {

        //     await Auth.signInWithEmailAndPassword(email, password);
        //     this.setState({email:'', password:''});
            
        // } catch (error) {
            
        //     console.log('sign in with email and password error '+error);
        // }
        
    }

    const handleChange = (evt)=>{

        const {value , name} = evt.target;
        setUserCredentials({...userCredentials, [name]:value});
    }

    const{code, message} =  userError?userError:{};

    return (

        <SignInContainer>
            <Title>{'I already have account'}</Title>
            <span>{'Sign in with your email and password'}</span>
            <ErrorMsg>{userError?userError.message:null}</ErrorMsg>
            <form onSubmit={handleSubmit}>
                <FormInput
                handleChange={handleChange}
                label='email'
                highlight={
                    code==='auth/user-not-found'?true:false
                } 
                type='email' name='email' value={email} required />

                <FormInput
                handleChange={handleChange}
                label='password'
                highlight={
                    code==='auth/wrong-password'?true:false
                }  
                type='password' name='password' value={password} required />

                <ButtonContainer>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type='button' 
                    onClick={googleSigninStart} 
                    isGoogleSignin>Sign in with Google</CustomButton>
                </ButtonContainer>
                
            </form>
        </SignInContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    userError: SelectUserError
});

const mapDispatchToProps = (dispatch)=>({
    googleSigninStart:()=>dispatch(GoogleSignInStart()),
    emailSigninStart:(email, password)=>dispatch(EmailSignInStart({email, password}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);