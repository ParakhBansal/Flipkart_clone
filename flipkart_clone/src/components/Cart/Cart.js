import "./styles.scss";
import React, { useState } from 'react';
import cart from "../../assets/images/cart.png";
import Header from "../Header";
import { useSelector } from 'react-redux';
import { incrementCart, decrementCart, removeCart } from "../../Redux/Actions/Action";
import { useDispatch } from "react-redux";
import CartItem from "./cartItem/CartItem";
import swal from "sweetalert"

const Cart = () => {
    const [formOpen, setformOpen] = useState(false)
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const dispatch = useDispatch()
    function setopen(flag) {
        setformOpen(flag)
    }
    function loginUser(flag) {
        setisLoggedIn(flag);
    }
    const cartData = useSelector(state => state.cart.data)

    let total_price = 0;
    let total_discount = 0;
    for (let i = 0; i < cartData.length; i++) {
        total_price = total_price + (cartData[i][0]["price"] * cartData[i][1]);
        total_discount = total_discount + (Math.ceil(cartData[i][0]["price"] * (cartData[i][0]["discount"] / 100))) * cartData[i][1]
    }
    let total_amt = total_price - total_discount;
    return (
        <div>
            <Header fun={setopen} loginFlag={isLoggedIn} loginFun={loginUser} Cartflag={true} />
            <div className="cartParent">
                {
                    (cartData.length > 0) ?
                    (<div className="cartBox">
                            <div className="cartItems">
                            <p>My Cart ({cartData.length})</p>{
                                cartData.map((prod, i) => {
                                    return (
                                        <div className="cart_item">
                                            <CartItem data={prod[0]} />
                                            <div>
                                                <button className="cart_incdec" onClick={() => {
                                                    if (prod[1] == 1) {
                                                        dispatch(removeCart(i))
                                                    }
                                                    else {
                                                        dispatch(decrementCart(i))
                                                    }
                                                }}>-</button>
                                            <span className="cart_counter">{prod[1]}</span>
                                                <button className="cart_incdec" onClick={() => { dispatch(incrementCart(i)) }}>+</button>
                                                <span className="cart_remove" onClick={() => dispatch(removeCart(i))}>REMOVE</span>
                                            </div>
                                        </div>)
                                })}
                                <div className="cart_placeorder">
                                    <button className="placeorder" onClick={() => {
                                        swal({
                                            title: "Order Placed",
                                            text: "Your order has been placed!",
                                            icon: "success",
                                            button: "Shop More",
                                          });
                                    }}>PLACE ORDER</button></div></div>
                            <div className="cartPrices">
                                <div className="pricedetails">PRICE DETAILS</div>
                                <div>
                                    <div className="cart_prices">
                                        <span>Price ({cartData.length} item)</span>
                                        <span>&#8377;{total_price}</span>
                                    </div>
                                    <div className="cart_prices">
                                        <span>Discount</span>
                                        <span>-&#8377;{total_discount}</span>
                                    </div>
                                    <div className="cart_prices">
                                        <span>Delivery Charges</span>
                                        <span>{(total_amt > 500) ? <span className="delchrg">FREE</span> : 80}</span>
                                    </div>
                                </div>
                                <div className="cart_total">
                                    <span>Total Amount</span>
                                    <span>{total_amt}</span>
                                </div>
                                <div className="cart_saving">You will save &#8377;{total_discount} on this order</div>
                            </div>
                        </div>) :
                        (<img src={cart} />)
                }
            </div>
        </div>
    )
}

export default Cart
