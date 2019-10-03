import React from 'react';
import Signin from '../../Components/sign-in/sign-in.component';
import Signup from '../../Components/sign-up/sign-up.component';
import {SignInUpContainer, Divider} from './sign-in-sign-up.styles';

const SigninSignupPage = ()=>{

    return (
        
        <SignInUpContainer>
            <Signin />
            <Divider />
            <Signup />
        </SignInUpContainer>
    );
}

export default SigninSignupPage;