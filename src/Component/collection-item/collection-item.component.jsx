import React from 'react';
import CusttomerButton from '../customer-button/customer-button.componet';
import './collection-item.style.css';
import {connect} from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

const CollectionItem = ({item,addItem})=>{
    const {id,title,name,price,imageUrl} = item
   return ( <div className="collection-item">
        <div className="image" style ={{
            backgroundImage:`url(${imageUrl})`
        }}/>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="title">{price}</span>
        </div>
        <CusttomerButton onClick={()=>addItem(item)} inverted>Add to card</CusttomerButton>
    </div>
   )
}
const mapDispathToProps = dispatch => ({
    addItem:item => dispatch(addItem(item))
})
export default connect(null,mapDispathToProps) (CollectionItem);