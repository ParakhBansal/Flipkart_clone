import React, { useState } from 'react';
import "./styles.scss";
import { useDispatch } from 'react-redux';
import {fetch_product_by_id} from "../../../Redux/Actions/Action";
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [heartSvg, setheartSvg] = useState(false);
    const handleNavigate = (id) => {
        dispatch(fetch_product_by_id(id))
        setTimeout(() => {
            navigate(`/product`);
        }, 1000);
    }
    return (
        <div className='bodycontent_card' onClick={() => handleNavigate(props.data.id)}>
            {heartSvg ? (<div className='heartsvg' onClick={() => {
                setheartSvg(false)
            }}><svg xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#e45372" class="eX72wL" fill-rule="evenodd" opacity=".9"></path></svg></div>) : (<div className='heartsvg' onClick={() => {
                setheartSvg(true)
            }}><svg xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#ccbbbb" class="eX72wL"fill-rule="evenodd" opacity=".9"></path></svg></div>)}
            <div className='Cardimage_parent'>
                <div className='Cardimage'>
                    <img src={props.data["images"][0]}/>
                </div>
            </div>
            <div className='card_name'>
                {props.data.name}
            </div>
            <div className='card_rating_parent'>
                <div className='card_rating'>
                    {props.data["ratingReviews"]["avg_rating"]}
                    <img src={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="}/>
                </div>
                <div className='card_reviews'>
                    ( {props.data["ratingReviews"]["rating"]} )
                </div>
                {!props.data["assured"] || <img className='assured_img' src={"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"}/>}
            </div>
            <div className='card_rating_parent'>
             <span className='card_sellingprice'>&#8377;{Math.ceil(props.data["price"] - (props.data["price"] * (props.data["discount"]/100)))}</span>
             <span className='card_actualprice'>{props.data["price"]}</span>
             <span className='card_discount'>{props.data["discount"]} % off</span>
            </div>
            <div className='card_offer'>
                {props.data["offers"][0]["offerType"]}
            </div>
        </div>
    )
}

export default Card
