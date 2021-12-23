
import { CHANGE_SORT, PRODUCT_GET_SUCCESS, PRODUCT_LOADING_END, PRODUCT_LOADING_START, PRODUCT_SORT } from "./actionType"

export function getProduct(){
    return async dispatch =>{
        dispatch(productLoadingStart())
        let resp = await fetch("http://localhost:3001/product")
        let products = await resp.json()
        dispatch(productGetSuccess(products))
        dispatch(sortProduct())
        dispatch(productLoadingEnd())
    }
}

export function addProduct(product){
    return async dispatch => {
        let options ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(product)
        }
        let resp = await fetch("http://localhost:3001/product",options)
        dispatch(getProduct())
    }
}
export function deleteProduct(productId) {
    return async dispatch => {
        let resp = await fetch("http://localhost:3001/product/" + productId, { method: 'DELETE' })
        dispatch(getProduct())
    }
}
export function changeSort(sort){
    return async dispatch => {
        dispatch({type:CHANGE_SORT, sort})
        dispatch(sortProduct())
    }
}

export function sortProduct(){
    return {
        type: PRODUCT_SORT,
    }
}


function productGetSuccess(products){
    return{
        type: PRODUCT_GET_SUCCESS,
        products
    }
}

function productLoadingStart(){
    return {
        type: PRODUCT_LOADING_START
    }
}
function productLoadingEnd() {
    return {
        type: PRODUCT_LOADING_END
    }
}