import React from 'react';
import './customer-button.style.css';

const CusttomerButton = ({children,isGoogleSignIn,inverted,...otherProps}) =>(
    <button className={`${inverted ? 'inverted':''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CusttomerButton;