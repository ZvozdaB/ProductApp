import { useState } from "react"
import { useDispatch } from "react-redux";
import { addProduct } from "../API/api";
import { getProduct } from "../store/action/products";
import BlurScrin from "./BlurScrin";

export default function ProductForm(props){
    let dispatch = useDispatch()
    let [productName, setProductName] = useState("");
    let [productNameError, setProductNameError] = useState("")
    let [caunt, setCaunt] = useState(1)
    let [weight, setWeight] = useState(1)

    function BlurHeandler(e){
        let value = e.target.value
         !!value.trim() || setProductNameError("Product name can't be empty")
        
    }

    async function OnSubmit(e) {
        e.preventDefault()
        if (!productNameError){
            let product = {
                "name": productName,
                "count": caunt,
                "weight": weight + "g"}
           await addProduct(product)
            props.FormTogel()
            dispatch(getProduct())
        }
    }



    let inputClass = "border rounded-lg  bg-sky-100 text-sky-700 px-1 focus:outline-sky-600 mb-4"

    return (
        <div className="flex justify-center items-center fixed inset-0 bg-[rgba(100,100,100,.5)] z-0">
        <form  
            className="rounded-md bg-sky-500 p-6 text-lg text-white flex flex-col font-semibold reletiv z-10"
            onSubmit={OnSubmit}>
            <label htmlFor="productName" >
                Product Name:
            </label>
                {productNameError && <span className="text-sm text-rose-600">{productNameError}</span>}
                <input 
                    type="text" 
                    id="productName" 
                    className={inputClass} 
                    value={productName} 
                    onChange={(e) => setProductName(e.target.value)} 
                    onBlur={BlurHeandler} 
                    onFocus={() => setProductNameError("")}/>
            <label htmlFor="caunt">
                    Caunt:
            </label>     
            <input 
                type="number" 
                min="0" 
                id="caunt" 
                className={inputClass} 
                value={caunt} 
                onChange={(e) => setCaunt(e.target.value)}/>
                
            <label htmlFor="weight">
                    Weight:
            </label>
            <input 
                type="number" 
                min="0" 
                id="weight" 
                className={inputClass} 
                value={weight} 
                onChange={(e) => setWeight(e.target.value)}/>

            <div className="flex justify-between">
                <button  className="border px-2 py-1 rounded-xl font-bold">Add Product</button>

                    <button onClick={props.FormTogel} className="border px-2 py-1 rounded-xl font-bold">Cancel</button>
            </div>
        </form>
        </div>
    )
}