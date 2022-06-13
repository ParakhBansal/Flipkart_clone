import { PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAILURE,FETCH_PROD,FETCH_SUCCESS,FETCH_FAILURE,ADD_TO_CART,INCREMENT_ITEM_CART,DECREMENT_ITEM_CART,REMOVE_ITEM_CART } from "./types";
import axios from "axios";
import {get_product} from '../services/service';


const requser = () => {
    return {
        type: PRODUCTS_REQUEST,
    }
}

const user_success = (usr_arr) => {
    return {
        type: PRODUCTS_SUCCESS,
        data: usr_arr,
    }
}

const user_failure = (error) => {
    return {
        type: PRODUCTS_FAILURE,
        data: error,
    }
}

const fetch_prod = () => {
    return {
        type: FETCH_PROD,
    }
}

const fetch_success = (prod) => {
    return {
        type: FETCH_SUCCESS,
        data: prod,
    }
}

const fetch_failure = (error) => {
    return {
        type: FETCH_FAILURE,
        data: error,
    }
}

export const get_users = () => {
    return (dispatch) => {
        dispatch(requser)
        axios.get(get_product)
            .then(
                (res) => {
                    dispatch(user_success(res.data))
                }
            )
            .catch(
                (error) => {
                    dispatch(user_failure(error))
                }
            )
    }
}

export const fetch_product_by_id = (id) => {
    return (dispatch) => {
        dispatch(fetch_prod)
        axios.get(`${get_product}/${id}`)
            .then(
                (res) => {
                    localStorage.setItem("data",JSON.stringify([res.data]))
                    dispatch(fetch_success(res.data))
                }
            )
            .catch(
                (error) => {
                    dispatch(fetch_failure(error))
                }
            )
    }
}


export const addToCart = (prod) => {
    return {
        type: ADD_TO_CART,
        data: prod,
    }
}


export const incrementCart = (i) => {
    return {
        type: INCREMENT_ITEM_CART,
        data: i,
    }
}
export const decrementCart = (i) => {
    return {
        type: DECREMENT_ITEM_CART,
        data: i,
    }
}
export const removeCart = (i) => {
    return {
        type: REMOVE_ITEM_CART,
        data: i,
    }
}

