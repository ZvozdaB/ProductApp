import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/action/products";


export default function ProductLict({product}) {
    let dispatch = useDispatch()
    function deleteHeandler(){
        dispatch(deleteProduct(product.id))
    }

    return (
            <li  className=" p-4 flex justify-between">
                <div>
                <div className="font-bold">{product.name}</div>
                    <span className="pr-3">Caunt: {product.count}</span>
                    <span>Weight: {product.weight}</span>
                </div>
                <div onClick={deleteHeandler}>
                    X
                </div>
            </li>
    )
}