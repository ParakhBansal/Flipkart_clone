import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Body from './components/Body/Body';
import Product from './components/product/Product';
import Cart from './components/Cart/Cart';

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="product" element={<Product />} />
                <Route path="cart" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;