import React from 'react';
import './checkout.style.css';
import { connect } from 'react-redux';
import { selectorCartItem, selectorTotal } from '../../redux/cart/cart.selectors';
import CheckOutItem from '../../Component/checkout-item/checkout-item.component';
import StripeCheckoutButtom from '../../Component/stripe-button/stripe-button.component';

const CheckOut = ({cart,total}) => (
    <div className='checkout-page'>
       <div className="checkout-header">
           <div className="checkout-block">
               <span>Product</span>
           </div>
           <div className="checkout-block">
               <span>Description</span>
           </div>
           <div className="checkout-block">
               <span>Quantity</span>
           </div>
           <div className="checkout-block">
               <span>Price</span>
           </div>
           <div className="checkout-block">
               <span>Remove</span>
           </div>
       </div>
       {
           cart.map(cart=> <CheckOutItem key={cart.id} cartItem={cart} />)
       }
       <div className="total">
        <span>TOTAL : ${total}</span>
        </div> 
            
        <StripeCheckoutButtom price={total} /> 
        <div className="test-warning">
                *Dùng thẻ ở đây nè <br/>
                tk : 4242424242424242
                <br/>
                ngày : 01/27
                <br/>
                CVC : 123

            </div>
    </div>
)

const mapStateToProps = (state) => ({
    cart : selectorCartItem(state),
    total : selectorTotal(state)
})

export default connect(mapStateToProps)(CheckOut);