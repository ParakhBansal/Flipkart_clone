import React from 'react'
import "./styles.scss"
import offerimg from "../../../assets/images/offerimg.png"
import rupeeimg from "../../../assets/images/rupeeimg.svg"
import supercoin from "../../../assets/images/supercoin.png"

const Details = (props) => {
    return (
        <div className='product_details_parent'>
            <div className='product_name'>
                {props.data["name"]}
            </div>
            <div className='product_rating_parent'>
                <div className='product_rating'>
                    {props.data["ratingReviews"]["avg_rating"]}
                    <img src={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="}/>
                </div>
                <div className='product_reviews'>
                    {props.data["ratingReviews"]["rating"]} ratings & {props.data["ratingReviews"]["reviews"]} reviews
                </div>
                {!props.data["assured"] || <img className='assured_img' src={"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"}/>}
            </div>
            {
                (props.data["specialPrice"]) ? <div className='product_splprice'>Special Price</div> : <div></div>
            }
            <div className='product_rating_parent'>
             <span className='product_sellingprice'>&#8377;{Math.ceil(props.data["price"] - (props.data["price"] * (props.data["discount"]/100)))}</span>
             <span className='product_actualprice'>{props.data["price"]}</span>
             <span className='product_discount'>{props.data["discount"]} % off</span>
             <img src={"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/info-basic_6c1a38.svg"}/>
            </div>
            {
                (props.data["stock"]<4) ? (<div className='product_hurry'>Hurry, Only a few left!</div>) :<div></div>
            }
            {
                (props.data["offers"].length >0) ? (<div>
                    <div className='product_availoffr'>Available Offers</div>
                    { props.data["offers"].map((offer) => {
                        return <div className='product_offer'>
                            <img src={offerimg}/>
                            <span className='product_offertype'>{offer["offerType"]}</span>
                            <span>{offer["description"]}</span>
                            <span className='tnc'>T&C</span>
                        </div>
                    })}
                    </div>
                ) : <div></div>
            }
            <div className='product_services'>
                <span className='product_servicestxt'>Services</span>
                <div className='product_servicescontent'>
                <img src={rupeeimg}/>
                <span className='product_servicetype'>{props.data["services"]["paymentType"]} available</span>
                </div>
            </div>
            <div className='product_sellers'>
            <span className='product_servicestxt'>Seller</span>
                <div className='product_sellercontent'>
                <div className='product_servicescontent2'>
            <div className='product_sellername'>
                {props.data["seller"][0]["name"]}
            </div>
            <div className='product_sellerrating'>
            {props.data["seller"]["rating"]}
                    <img src={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="}/>
            </div></div>
            {(!props.data["seller"]["returns"])?(<ul>
                <li>No Returns Applicable</li>
            </ul>):<div></div>}
            </div>
            </div>
            <img src={supercoin}/>
            <div className='product_sellers'>
            <span className='product_servicestxt'>Description</span>
            <div className='product_desc'>
                {props.data["description"]}
            </div>
            </div>
            <div className='specsHead'>Specifications</div>
            <div className='specs_table'>
                <div className='specs_th'>In The Box</div>
                <div className='specs_tr'>
                    <div className='specs_tr_th'>Sales Package</div>
                    <div className='specs_tr_td'>
                        {props.data["specifications"]["attributes"][0]["inTheBox"]["salesPackage"]}
                    </div>
                </div>
                <div className='specs_tr'>
                    <div className='specs_tr_th'>Pack Of</div>
                    <div className='specs_tr_td'>
                        {props.data["specifications"]["attributes"][0]["inTheBox"]["packOf"]}
                    </div>
                </div>
            </div>
            <div className='specs_table'>
                <div className='specs_th'>General</div>
                <div className='specs_tr'>
                    <div className='specs_tr_th'>Brand</div>
                    <div className='specs_tr_td'>
                        {props.data["specifications"]["attributes"][1]["general"]["brand"]}
                    </div>
                </div>
                <div className='specs_tr'>
                    <div className='specs_tr_th'>Suitable For</div>
                    <div className='specs_tr_td'>
                        {props.data["specifications"]["attributes"][1]["general"]["suitableFor"]}
                    </div>
                </div>
                <div className='specs_tr'>
                    <div className='specs_tr_th'>Applied On</div>
                    <div className='specs_tr_td'>
                        {props.data["specifications"]["attributes"][1]["general"]["appliedOn"]}
                    </div>
                </div>
                <div className='specs_tr'>
                    <div className='specs_tr_th'>Removable</div>
                    <div className='specs_tr_td'>
                        {props.data["specifications"]["attributes"][1]["general"]["removable"]}
                    </div>
                </div>
                <div className='specs_tr'>
                    <div className='specs_tr_th'>Color</div>
                    <div className='specs_tr_td'>
                        {props.data["specifications"]["attributes"][1]["general"]["color"]}
                    </div>
                </div>
            </div>
            <div className='specs_table'>
                <div className='specs_th'>Dimensions</div>
                <div className='specs_tr'>
                    <div className='specs_tr_th'>Height</div>
                    <div className='specs_tr_td'>
                        {props.data["specifications"]["attributes"][2]["dimensions"]["height"]}
                    </div>
                </div>
                <div className='specs_tr'>
                    <div className='specs_tr_th'>Width</div>
                    <div className='specs_tr_td'>
                        {props.data["specifications"]["attributes"][2]["dimensions"]["width"]}
                    </div>
                </div>
            </div>
            <div className='specs_table'>
                <div className='specs_th'>More Details</div>
                <div className='specs_tr'>
                    <div className='specs_tr_th'>Generic Name</div>
                    <div className='specs_tr_td'>
                        {props.data["specifications"]["attributes"][3]["More Details"]["GenericName"]}
                    </div>
                </div>
                <div className='specs_tr'>
                    <div className='specs_tr_th'>Country Of Origin</div>
                    <div className='specs_tr_td'>
                        {props.data["specifications"]["attributes"][3]["More Details"]["CountryOfOrigin"]}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
