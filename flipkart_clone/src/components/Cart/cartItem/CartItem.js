import React from 'react';
import "./styles.scss"

const CartItem = (props) => {
    return (
        <div className='cartitem_parent'>
            <div className='cartitem_image'>
                <img className="cart_item_img" src={props.data["images"][0]} />
            </div>
            <div className='cartitem_data'>
                <div className='cartitem_name'>{props.data.name}</div>
                <div className='cartitem_packof'>{props.data["specifications"]["attributes"][0]["inTheBox"]["packOf"]}</div>
                <div className='cartitem_packof'>Seller : {props.data["seller"][0]["name"]}
                {!props.data["assured"] || <img className='assured_img' src={"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"}/>}
                </div>
                <div className='card_rating_parent'>
             <span className='cart_sellingprice'>&#8377;{Math.ceil(props.data["price"] - (props.data["price"] * (props.data["discount"]/100)))}</span>
             <span className='cart_actualprice'>{props.data["price"]}</span>
             <span className='cart_discount'>{props.data["discount"]} % off</span>
             <span className='cart_offers'>{props.data[ "offers"].length} offers applied <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" class="_3GN0Y0"><g fill="none"><path d="M-1-1h16v16H-1"></path><path d="M7 0C3.136 0 0 3.136 0 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7zm.7 10.5H6.3V6.3h1.4v4.2zm0-5.6H6.3V3.5h1.4v1.4z" fill="#388e3c" class=""></path></g></svg></span>
            </div>
            </div>
        </div>
    )
}

export default CartItem
