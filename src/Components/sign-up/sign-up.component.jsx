import React,{Component, useState} from 'react';
import {Auth, CreateUserProfile} from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignUpContainer, Title} from './sign-up.styles';

const Signup = ()=>{

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
        
        try {

            const {user} = await Auth.createUserWithEmailAndPassword(email, password);
            await CreateUserProfile(user, {displayName});
            
            setUserCredentials({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });
            
        } catch (error) {
            console.log('sign up fail '+error);
        }

    }

   const handleChange = (evt)=>{

        evt.preventDefault();

        const {value , name} = evt.target;

        setUserCredentials({
            ...userCredentials,
            [name]: value
        });
    }

    return (

        <SignUpContainer>
            <Title className='title'>{'I do not have account'}</Title>
            <span>{'Sign up with your email and password'}</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                    handleChange={handleChange}
                    label='name' 
                    type='text' name='displayName' value={displayName} required
                />

                <FormInput 
                    handleChange={handleChange}
                    label='email' 
                    type='email' name='email' value={email} required
                />

                <FormInput 
                    handleChange={handleChange}
                    label='password' 
                    type='password' name='password' value={password} required
                />

                <FormInput 
                    handleChange={handleChange}
                    label='confirm password' 
                    type='password' name='confirmPassword' value={confirmPassword} required
                />

                <CustomButton type='submit'>Sign up</CustomButton>
            </form>
        </SignUpContainer>
    );
}

export default Signup;