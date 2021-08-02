import React from 'react';
import './cart-dropdown.style.css';
import CusttomerButton from '../customer-button/customer-button.componet';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectorCartItem } from '../../redux/cart/cart.selectors';
import toggleCartHiden from '../../redux/cart/cart.action';
import { withRouter } from 'react-router-dom';

const CartDropdow = ({cartItems,history,dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
        {
            cartItems.map((item)=> (<CartItem item={item} key={item.id} />))
        }
        </div>
        
        <CusttomerButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHiden())
            }} >GO TO CHECKOUT</CusttomerButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems:selectorCartItem(state)
});
export default withRouter(connect(mapStateToProps)(CartDropdow));