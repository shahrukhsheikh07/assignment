import { combineReducers } from "redux";
import { productReducer , selectedProductReducer,addToCartReducer} from "./productReducer";

const reducers = combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
    cart:addToCartReducer,
});

export default reducers;