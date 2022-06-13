import React ,{useState}from 'react';
import Sidebar from './Sidebar/Sidebar';
import BodyContent from './BodyContent/BodyContent';
import "./styles.scss";
import Header from '../Header';
import Login from '../LoginModal/Login';



const Body = () => {
    const [formOpen, setformOpen] = useState(false)
    const [isLoggedIn, setisLoggedIn] = useState(false)
    function setopen(flag){
        setformOpen(flag)
    }
    function loginUser(flag){
        setisLoggedIn(flag);
        console.log(isLoggedIn);
    }
    return (
        <div className='appParent'>
           <Header fun={setopen} loginFlag={isLoggedIn} loginFun={loginUser}/>
           
           <div className='Parent_body'>
            <Sidebar/>
            <BodyContent/>
        </div>
   
           <Login fun={setopen} openFlag={formOpen} login={loginUser}/>
        </div>
       
    )
}

export default Body
