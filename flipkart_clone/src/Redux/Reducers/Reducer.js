import { PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAILURE,FETCH_PROD,FETCH_SUCCESS,FETCH_FAILURE,ADD_TO_CART,INCREMENT_ITEM_CART,DECREMENT_ITEM_CART,REMOVE_ITEM_CART } from "../Actions/types"

const initialState1 = {
    products: [],
    errormsg: "",
    loading: true,
}

export const productsReducer = (state = initialState1, action) => {
    switch (action.type) {
        case PRODUCTS_REQUEST:

            return {
                ...state,
                loading: true,
            }
        case PRODUCTS_SUCCESS:
            return {
                ...state,
                loading:false,
                products: action.data,
                error: "",
            }
        case PRODUCTS_FAILURE:
            return {
                ...state,
                loading:false,
                errormsg: action.data,
                products: [],
            }
        default:
            return state;
    }
}

const initialState2 = {
    productData: (localStorage.getItem("data"))? JSON.parse(localStorage.getItem("data"))[0] : {},
    errormsg: "",
    loading: true,
}

export const prod_id_Reducer = (state = initialState2, action) => {
    switch (action.type) {
        case FETCH_PROD:
            return {
                ...state,
                loading: true,
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading:false,
                productData: action.data,
                error: "",
            }
        case FETCH_FAILURE:
            return {
                ...state,
                loading:false,
                errormsg: action.data,
                products: {},
            }
        default:
            return state;
    }
}

const initialState3 = {
    data : (localStorage.getItem("cart"))? JSON.parse(localStorage.getItem("cart")) : []
}

export const cart_Reducer = (state = initialState3, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let k = [...state.data,[action.data,1]]
            localStorage.setItem("cart",JSON.stringify(k))
            return {
                data : k
            }
        case INCREMENT_ITEM_CART:
            let j = [...state.data];
            j[action.data][1] += 1;
            localStorage.setItem("cart",JSON.stringify(j))
            return {
                data : j
            } 
        case DECREMENT_ITEM_CART:
            let h = [...state.data];
            h[action.data][1] -= 1;
            localStorage.setItem("cart",JSON.stringify(h))
            return {
                data : h
            } 
        case REMOVE_ITEM_CART:
            let g = [...state.data];
            g.splice(action.data,1)
            localStorage.setItem("cart",JSON.stringify(g))
            return {
                data:g
            }
        default:
            return state;
        }
    }