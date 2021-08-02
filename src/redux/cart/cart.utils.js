export const addItemToCart = (cartItems,cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id);
    if (existingCartItem){
        return cartItems.map(cartItem => 
         cartItem.id === cartItemToAdd.id
         ? {...cartItem,
            quantity: cartItem.quantity + 1
        }
            :cartItem   
        )

    }
    return [...cartItems,{...cartItemToAdd,quantity: 1 }]
};

export const  removeITem = (cartItems,cartItemToremove) => {
    return cartItems.filter((cartID) => cartID.id !== cartItemToremove.id);
}

export const remove = (cartItems,cartItemToremove) => {
    const checkID = cartItems.find( item => item.id === cartItemToremove.id);
    if(checkID.quantity === 1){
     return cartItems.filter((cartID) => cartID.id !== cartItemToremove.id);
    }
    return cartItems.map(cartItem => cartItem.id === cartItemToremove.id ? {...cartItem,quantity : cartItem.quantity - 1} : cartItem )

}

// export const remove = (cartItems,cartItemToremove) => {
//         return cartItems.filter((cartID) => cartID.id !== cartItemToremove);
// }


