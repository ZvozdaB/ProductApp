import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../component/Loader/Loader";
import ProductForm from "../component/ProductForm";
import ProductLict from "../component/ProductList";

export default function Home(){
    let {products, loading} = useSelector(state => ({
        products: state.products,
        loading: state.loading
    }))


    return (
        <div className="wraper">
            <ul className="grid ro">
                {!loading 
                ? products.map(product => <ProductLict key={product.id} product={product}/>) 
                : <Loader/>}
            </ul>
        </div>
    )
}