import { createSelector } from "reselect";

// const INIT_STATE = {
//     hats:1,
//     sneakers:2,
//     jackets:3,
//     womens:4,
//     mens:5
// }


const selectorShop = state => state.shop;

export const selectortShopCollections = createSelector(
    [selectorShop],
    shop => shop.collections
)
export const selectorCollectionForPreview = createSelector(
    [selectortShopCollections],
    collection => Object.keys(collection).map(key => collection[key])
)
export const selectorCollection = initValue => createSelector(
    [selectortShopCollections],
    valueShop => valueShop[initValue]
)

