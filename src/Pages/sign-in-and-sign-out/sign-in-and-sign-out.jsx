import React from 'react';
import SignIng from '../../Component/sign-in/sign-in.component';
import './sign-in-and-sign-out.css';
import SignUp from '../../Component/sign-up/sign-up.component';
const SignInAndSignOut = () => (
    <div className='SignInAndSignOut'>
        <SignIng />
        <SignUp />
    </div>
)

export default SignInAndSignOut;