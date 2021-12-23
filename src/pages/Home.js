import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../component/Loader/Loader";
import ProductForm from "../component/ProductForm";
import ProductLict from "../component/ProductList";
import { changeSort } from "../store/action/products";


export default function Home(){
    let dispatch = useDispatch()
    let [select,setSelect] = useState("alf")
    let {products, loading} = useSelector(state => ({
        products: state.products,
        loading: state.loading
    }))

    useEffect(() => dispatch(changeSort(select)),[select])

    return (
        <div className="wraper">
            <div className="text-lg">
                <label htmlFor="select" className="mr-2">Sort by:</label>
                <select id="select" value={select} onChange={(e) => setSelect(e.target.value)}>
                    <option value="alf">alphabetically</option>
                    <option value="count">count</option>
                </select>
                
            </div>
            <ul className="grid ro">
                {!loading 
                ? products.map(product => <ProductLict key={product.id} product={product}/>) 
                : <Loader/>}
            </ul>
        </div>
    )
}