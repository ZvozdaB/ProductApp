import { CHANGE_SORT, PRODUCT_GET_SUCCESS, PRODUCT_LOADING_END, PRODUCT_LOADING_START, PRODUCT_SORT } from "../action/actionType"

let initialState = {
    products: [],
    loading: false,
    sort: "alf"
}

export function productReduser(state = initialState, action){
    switch(action.type){
        case PRODUCT_LOADING_START:
            return {...state, loading: true}
        case PRODUCT_LOADING_END: 
            return {...state, loading: false}
        case PRODUCT_GET_SUCCESS:
            return { ...state, products: action.products}
        case CHANGE_SORT: {
            return {...state, sort: action.sort}
        }
        case PRODUCT_SORT: 
            let sortProductArr = [...state.products]
            if (state.sort === "alf") {
                sortProductArr.sort((a, b) => a.name < b.name ? -1 : 1)
            } else if (state.sort === "count") {
                sortProductArr.sort((a, b) => a.count - b.count)
            }
            return {...state, products: sortProductArr}
        
        default: return state

    }
}