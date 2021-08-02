import React from 'react';
import './sign-in.style.css';
import FormInput from '../form-input/form-input.component';
import CusttomerButton from '../customer-button/customer-button.componet';
import {signInWithGoogle} from '../../firebase/firebase.utils'
class SignIng extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password :''
        }
    }

    HandleSubmit = event => {
        event.preventDefault();
        this.setState({
            email:'',
            password:''

        })
    }

    HandleChange = event => {
        const {value ,name} = event.target;
        this.setState ({
            [name]:value
        })
        
    }

    render (){
        console.log(this.state)
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit = {this.HandleSubmit}>
                    <FormInput name='email' HandelChange={this.HandleChange} label='Email' type='email' value={this.state.email} required />
                   
                    <FormInput name='password' HandelChange={this.HandleChange} label='Password' type='password' value={this.state.password} required />
                    <div className="buttons">
                    <CusttomerButton type='Submit' value='Submit' >SIGN IN</CusttomerButton>
                    <CusttomerButton onClick = {signInWithGoogle} >GOOGLE</CusttomerButton>

                    </div>
                   
                </form>
            </div>
        )
    }
}

export default SignIng;