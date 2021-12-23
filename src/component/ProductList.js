import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../store/action/products";


export default function ProductLict({product}) {
    let dispatch = useDispatch()
    
    function deleteHeandler(){
        let answer = window.confirm("Are you sure?")
        answer && dispatch(deleteProduct(product.id))
    }

    return (
            <li  className="flex justify-between items-center my-2 text-sky-900">
                <div className="w-5 h-5 bg-sky-500 rounded-full"></div>
            <div className="mr-auto pl-6" >
                    <Link to={"/product/"+ product.id} className="font-bold block">{product.name}</Link>
                    <span className="pr-3">Caunt: {product.count}</span>
                    <span>Weight: {product.weight}</span>
                </div>
                <div onClick={deleteHeandler} className="h-full w-10 relative group">
                    <div className="w-1 h-7 bg-sky-600 rounded-md absolute top-1/2 right-1/2 -translate-y-2/4 -translate-x-2/4 rotate-45 group-hover:bg-sky-900"></div>
                <div className=" w-1 h-7 bg-sky-600 rounded-md absolute top-1/2 right-1/2 -translate-y-2/4 -translate-x-2/4 -rotate-45 group-hover:bg-sky-900"></div>
                </div>
            </li>
    )
}