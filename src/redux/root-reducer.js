import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Directory from "./directory/directory.reducer";
import userREducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import ShopAction from "./shop/shop.reducer";
const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}
const rootReducer = combineReducers({
    user: userREducer,
    cart: cartReducer,
    directory: Directory,
    shop : ShopAction
})
export default persistReducer(persistConfig,rootReducer);