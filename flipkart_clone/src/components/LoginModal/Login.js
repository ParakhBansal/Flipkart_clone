import { Modal, TextField } from '@mui/material';
import React, { useState } from 'react';
import "./styles.scss";
import login_img from "../../assets/images/flipkart_login.png";
import { auth } from './firebaseConfig';
import swal from 'sweetalert';


const Login = (props) => {
    const [inputs, setinputs] = useState({
        email: "",
        password: ""
    })
    const [emailerror, setemailerror] = useState(false)
    const putinputval = (id, val) => {
        inputs[id] = val;
        setinputs({ ...inputs })
    }
    const submitForm = (e) => {
        auth.signInWithEmailAndPassword(
            inputs.email, inputs.password
        )
            .then((user) => {
                swal({
                    title: "Login Success!",
                    text: "User has logged in!",
                    icon: "success",
                    button: "OK!",
                  });
                props.login(true)
                handleClose()
            })
            .catch((err) => {
                alert(err)
            })
    }

    const handleClose = () => props.fun(false);
    return (
        <Modal
            open={props.openFlag}
            sx={{ height: "100%", width: "100%" }}
            onClose={handleClose}
        >
            <div className='loginFormParent'>
                <div className='login_sideimg'>
                    <img src={login_img} />
                </div>
                <div className='login_form'>
                    <span className='login_close' onClick={() => {
                        props.fun(false)
                    }}>✕</span>
                    <TextField id="email_mobile" value={inputs.email} sx={{ width: "80%" }} label="Enter Email"  variant="standard" onChange={(e) => {
                            putinputval("email", e.target.value)
                        }} />
                    <TextField id="password" value={inputs.password} type={"password"} sx={{ width: "80%" }} label="Enter Password" variant="standard" onChange={(e) => {
                        putinputval("password", e.target.value)
                    }} />
                    <div className='login_privacypolicy'>By continuing, you agree to Flipkart's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</div>
                    <button className='login_button' onClick={submitForm}>Login</button>
                    <div className='login_or'>OR</div>
                    <button className='otp_button'>Request OTP</button>
                    <a href="#" className='login_singup'>New to Flipkart? Create an account</a>
                </div>
            </div>
        </Modal>
    )
}


export default Login
