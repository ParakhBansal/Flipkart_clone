import { combineReducers } from "redux";
import {productsReducer,prod_id_Reducer,cart_Reducer} from "./Reducer";

const rootReducer = combineReducers({
    products : productsReducer,
    prod_by_id : prod_id_Reducer,
    cart : cart_Reducer,
})

export default rootReducer