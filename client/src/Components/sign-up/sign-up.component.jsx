import React,{Component, useState} from 'react';
import {connect} from 'react-redux';
import {Auth, CreateUserProfile} from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignUpContainer, Title, ErrorMsg} from './sign-up.styles';
import {SignupStart} from '../../Redux/user/user.actions';
import {createStructuredSelector} from 'reselect';
import {SelectUserSignupError} from '../../Redux/user/user.selector';

const Signup = ({signupStart, userSignupError})=>{

    const[userCredentials, setUserCredentials] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    });

    const {displayName, email, password, confirmPassword} = userCredentials;
    const handleSubmit = async (evt)=>{

        evt.preventDefault();

        if(password !== confirmPassword){

            alert('password not match');
            return;
        }

        signupStart({displayName, email, password});

    }

   const handleChange = (evt)=>{

        evt.preventDefault();

        const {value , name} = evt.target;

        setUserCredentials({
            ...userCredentials,
            [name]: value
        });
    }

    const{code, message} =  userSignupError?userSignupError:{};
    return (

        <SignUpContainer>
            <Title className='title'>{'I do not have account'}</Title>
            <span>{'Sign up with your email and password'}</span>
            <ErrorMsg>{message?message:null}</ErrorMsg>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                    handleChange={handleChange}
                    label='name'
                    type='text' name='displayName' value={displayName} required
                />

                <FormInput 
                    handleChange={handleChange}
                    label='email' 
                    highlight={
                     (code==='auth/invalid-email') ||
                     (code==='auth/email-already-in-use')?true:false
                    }
                    type='email' name='email' value={email} required
                />

                <FormInput 
                    handleChange={handleChange}
                    label='password'
                    highlight={code==='auth/weak-password'?true:false} 
                    type='password' name='password' value={password} required
                />

                <FormInput 
                    handleChange={handleChange}
                    label='confirm password'
                    highlight={code==='auth/weak-password'?true:false}  
                    type='password' name='confirmPassword' value={confirmPassword} required
                />

                <CustomButton type='submit'>Sign up</CustomButton>
            </form>
        </SignUpContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    userSignupError: SelectUserSignupError
});

const mapDispatchToProps = (dispatch)=>({
    signupStart:(userCredential)=>dispatch(SignupStart(userCredential))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);