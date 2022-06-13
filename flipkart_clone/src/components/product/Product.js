import React ,{ useState } from 'react';
import Details from './product_details/Details';
import ProductImages from './product_images/ProductImages';
import "./styles.scss";
import { useSelector,useDispatch } from 'react-redux';
import Login from '../LoginModal/Login';
import Header from '../Header';
import Flickity from "react-flickity-component";
import Card from '../Body/Card/Card';
import {addToCart} from "../../Redux/Actions/Action"

const Product = () => {
    const [formOpen, setformOpen] = useState(false)
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const dispatch = useDispatch();
    const cartFun = () => {
        dispatch(addToCart(productsData))
    }
    function setopen(flag){
        setformOpen(flag)
    }
    function loginUser(flag){
        setisLoggedIn(flag);
    }
    const flickityOptions = {
        pageDots:false,
        wrapAround:true
    }
    
    const productsData = useSelector(state => state.prod_by_id.productData)
    return (
        <div className='appParent'>
        <Header fun={setopen} loginFlag={isLoggedIn} loginFun={loginUser}/>
      
        <div className='productParent'>
            <div className='productDetails_parent'>
                <ProductImages arr={productsData["images"]} fun={cartFun} ind={productsData.id}/>
                <Details data={productsData}/>
            </div>
        </div>
        <div className='product_carousel'>
            <p>Similar Products</p>
        <Flickity 
         options={flickityOptions}
          >
        <Card data={productsData} />
        <Card data={productsData} />
        <Card data={productsData} />
        <Card data={productsData} />
        <Card data={productsData} />
        <Card data={productsData} />
        <Card data={productsData} />
        </Flickity>
        </div>
        <Login fun={setopen} openFlag={formOpen} login={loginUser}/>
     </div>
        
    )
}

export default Product
