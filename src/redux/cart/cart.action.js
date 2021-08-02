import typeCart from "./cart.type";

const toggleCartHiden = () =>({
    type : typeCart.TOGGLE_CART_HIDEN
})
export default toggleCartHiden;

export const addItem = item => ({
    type:typeCart.ADD_ITEM,
    payload:item
})

export const clearItemFromCart = item => ({
    type:typeCart.CLEAR_ITEM_FROM_CART,
    payload:item
})

export const removeItem = item => ({
    type:typeCart.REMOVE_ITEM,
    payload:item
})

