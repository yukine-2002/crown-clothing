import React ,{userState, useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';

import {connect} from 'react-redux';

import {googleSignInStart , emailSignInStart} from '../../redux/user/user.actions'

const  SignIn = ({emailSignInStart,googleSignInStart}) => {
  
  const [userCrendentials,setUserCredentials] = useState({email:'',password:''});

 const { email, password } = userCrendentials;
  const  handleSubmit = async event => {
    event.preventDefault();
   

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: '', password: '' });
    // } catch (error) {
    //   console.log(error);
    // }
    emailSignInStart(email,password);
  };

 const  handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({...userCrendentials, [name]: value });

    console.log({...userCrendentials})
  };

 
    
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            label='password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }


const mapDispatchToProps = dispatch => ({
  googleSignInStart : () => dispatch(googleSignInStart()),
  emailSignInStart : (email,password) => dispatch(emailSignInStart({email,password}))
})



export default connect(null,mapDispatchToProps)(SignIn);
