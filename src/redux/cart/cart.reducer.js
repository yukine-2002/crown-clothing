import typeCart from "./cart.type"
import { addItemToCart , removeITem , remove} from "./cart.utils";
const INITIAL_STATE = {
    hidden:true,
    cartItems : []
}

const cartReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case typeCart.TOGGLE_CART_HIDEN :
            return {
                ...state,
               hidden: !state.hidden

            };
        case typeCart.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        case typeCart.CLEAR_ITEM_FROM_CART :
            return {
                ...state,
                cartItems:removeITem(state.cartItems,action.payload)
            }
        case typeCart.REMOVE_ITEM:
            return {
                ...state,
                cartItems : remove(state.cartItems,action.payload)
            }
        default :
        return state;
    }
}
export default cartReducer;