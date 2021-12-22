export async function fetchProduct(){
    let resp = await fetch("http://localhost:3001/product")
    let products = await resp.json()
    return products
}

export async function addProduct(product){
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(product)
    }

    let resp = await fetch("http://localhost:3001/product", options)
}
export async function deleteProduct(productId) {
    let resp = await fetch("http://localhost:3001/product/" + productId,{method: 'DELETE'})
    
}
