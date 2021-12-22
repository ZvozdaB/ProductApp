import { PRODUCT_GET_SUCCESS, PRODUCT_LOADING_END, PRODUCT_LOADING_START } from "../action/actionType"

let initialState = {
    products: [],
    loading: false
}

export function productReduser(state = initialState, action){
    switch(action.type){
        case PRODUCT_LOADING_START:
            return {...state, loading: true}
        case PRODUCT_LOADING_END: 
            return {...state, loading: false}
        case PRODUCT_GET_SUCCESS:
            return { ...state, products: action.products}
        
        default: return state

    }
}