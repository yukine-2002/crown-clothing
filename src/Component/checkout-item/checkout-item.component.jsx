import React from 'react';
import './checkout-item.style.css';
import { addItem, clearItemFromCart ,removeItem} from '../../redux/cart/cart.action';
import { connect } from 'react-redux';


const CheckOutItem = ({cartItem ,clearIteam,addItem,removeItem}) => 
{
    const {name,imageUrl,quantity,price} = cartItem;
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt='item' />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick = { () => removeItem(cartItem)}>&#10094;</div>
            {quantity}
            <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
            

        <span className="price">{price}</span>
       <div onClick={()=> clearIteam(cartItem)} className="remove-button">&#10006;</div>

      
    </div>
)
}

const mapStatemapDispathToProps= dispatch => ({
    addItem : item => dispatch(addItem(item)),
    clearIteam : item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item))
})


export default connect(null,mapStatemapDispathToProps)(CheckOutItem);