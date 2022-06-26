
import { ActionTypes } from "../contants/action-types"
export const setProducts = (product) => {

    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products ,
    };
};

export const selectedProduct = (product) => {
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};