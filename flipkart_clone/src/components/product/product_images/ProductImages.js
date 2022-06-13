import React,{ useState } from 'react'
import "./styles.scss"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductImages = (props) => {
    const navigate = useNavigate()
    const [heroImg, setheroImg] = useState(0)
    const cartData = useSelector(state => state.cart.data)
    let added_to_cart = false
    for(let i=0;i<cartData.length;i++){
        if(cartData[i][0].id == props.ind){
            added_to_cart=true;
            break;
        }
    }
    return (
        <div className='product_images_parent'>
            <div className='product_images_view'>
                {props.arr.map((img,i) => {
                    if(i==heroImg){
                        return <div style={{border: "2px solid #2874f0"}} className='product_images_thumbnail' onMouseEnter={() => {
                            setheroImg(i)
                        }}><img src={img}/></div>
                    }
                    return <div className='product_images_thumbnail' onMouseEnter={() => {
                        setheroImg(i)
                    }}><img src={img}/></div>
                })}
            </div>
            <div className='product_heroimg_parent'>
            <div className='product_heroimg'>
                <img src={props.arr[heroImg]}/>
            </div>
            <div className='product_buttons'>
                {(!added_to_cart)?
                (<button className='product_addtocart' onClick={() =>{ 
                    props.fun()}}>
                <svg className="_1KOMV2" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path class="" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                    ADD TO CART
                </button>) : <button className='product_addtocart' onClick={() => navigate("/cart")}>GO TO CART</button>}
                <button className='product_buynow'>
                    <img src={"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMHY3LjdoMi4xVjE0TDcgNS42SDQuMkw3IDAiIGZpbGw9IiNGRkYiLz48L3N2Zz4="}/>BUY NOW</button>
            </div>
            </div>
        </div>
    )
}

export default ProductImages
