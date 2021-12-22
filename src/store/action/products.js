import { fetchProduct } from "../../API/api"
import { PRODUCT_GET_SUCCESS, PRODUCT_LOADING_END, PRODUCT_LOADING_START } from "./actionType"

export function getProduct(){
    return async dispatch =>{
        dispatch(productLoadingStart())
        let products = await fetchProduct()
        dispatch(productGetSuccess(products))
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
        // dispatch(productGetSuccess(products))
        // dispatch(productLoadingEnd())
    }
}
export function deleteProduct(productId) {
    return async dispatch => {
        let resp = await fetch("http://localhost:3001/product/" + productId, { method: 'DELETE' })
        dispatch(getProduct())
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