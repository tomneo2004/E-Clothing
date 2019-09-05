import React,{Component} from 'react';
import {Auth, CreateUserProfile} from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';

class Signup extends Component{

    constructor(){
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async (evt)=>{

        evt.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){

            alert('password not match');
            return;
        }
        
        try {

            const {user} = await Auth.createUserWithEmailAndPassword(email, password);
            await CreateUserProfile(user, {displayName});
            
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });
            
        } catch (error) {
            console.log('sign up fail '+error);
        }

    }

    handleChange = (evt)=>{

        evt.preventDefault();

        const {value , name} = evt.target;

        this.setState({
            [name]: value
        });
    }

    render(){

        const {displayName, email, password, confirmPassword} = this.state;

        return (

            <div className='sign-up'>
                <h1 className='title'>{'I do not have account'}</h1>
                <span>{'Sign up with your email and password'}</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        handleChange={this.handleChange}
                        label='name' 
                        type='text' name='displayName' value={displayName} required
                    />

                    <FormInput 
                        handleChange={this.handleChange}
                        label='email' 
                        type='email' name='email' value={email} required
                    />

                    <FormInput 
                        handleChange={this.handleChange}
                        label='password' 
                        type='password' name='password' value={password} required
                    />

                    <FormInput 
                        handleChange={this.handleChange}
                        label='confirm password' 
                        type='password' name='confirmPassword' value={confirmPassword} required
                    />

                    <CustomButton type='submit'>Sign up</CustomButton>
                </form>
            </div>
        );
    }
}

export default Signup;