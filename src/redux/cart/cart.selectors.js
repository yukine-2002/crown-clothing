import {createSelector} from 'reselect'

const selectorCart = state => state.cart;

export const selectorCartItem = createSelector(
    [selectorCart],
    cart => cart.cartItems
);

export const selectorHidden = createSelector(
    [selectorCart],
    cart=>cart.hidden
);

export const selectorTotal = createSelector(
    [selectorCartItem],
    cartItems => cartItems.reduce(
        (accumulator , cartItem) => accumulator + cartItem.quantity *cartItem.price ,0)
    
);

export const selectorCartItemCount = createSelector(
    [selectorCartItem],
    cartItems => cartItems.reduce(
        (accumulator , cartItem) => accumulator + cartItem.quantity ,0)
)