import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { getProduct } from "./store/action/products";

function App() {
  let dispatch = useDispatch()
  useEffect(() => dispatch(getProduct()),[])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product/>} />

      </Routes>
    </>
  );
}

export default App;
