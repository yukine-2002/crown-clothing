import SHOP_DATA from "./shop.data";

const INIT_STATE = {
    collections : SHOP_DATA
}

const ShopAction = (state = INIT_STATE , action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default ShopAction;