import { useState } from "react";
import { Link } from "react-router-dom";
import ProductForm from "./ProductForm";

export default function Header() {
    let [formOpen, setFormOpen] = useState(false)

    function FormTogel(){
        setFormOpen(!formOpen)
    }

    return (
        <>
        <div className="bg-sky-500">
            <header className="wraper flex justify-between text-white py-2 text-xl">
                <Link to="/">Product</Link>
                    <div onClick={FormTogel} className="cursor-pointer ">+ Add Product</div>
            </header>
        </div>
            {formOpen && <ProductForm FormTogel={FormTogel}/>}
        </>
    )
}