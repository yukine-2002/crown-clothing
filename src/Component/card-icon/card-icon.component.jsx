import React from "react";
import { selectorCartItemCount } from "../../redux/cart/cart.selectors";
import './card-icon.style.css';
import {connect} from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assest/shopping-bag.svg.svg';
import toggleCartHiden from "../../redux/cart/cart.action";

const CardIcon = ({toggleCartHiden,itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHiden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)
const mapStateToProps = (state) => ({
    itemCount : selectorCartItemCount(state)
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartHiden : () => dispatch(toggleCartHiden())
})
export default connect(mapStateToProps,mapDispatchToProps )(CardIcon);