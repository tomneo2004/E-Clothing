import React from 'react';
import Signin from '../../Components/sign-in/sign-in.component';
import Signup from '../../Components/sign-up/sign-up.component';
import './sign-in-sign-up.styles.scss'

const SigninSignupPage = ()=>{

    return (
        
        <div className='sigin-signup'>
            <Signin />
            <hr className='divider'/>
            <Signup />
        </div>
    );
}

export default SigninSignupPage;