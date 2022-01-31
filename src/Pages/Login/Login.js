import React from 'react';
import google from "../../img/logos/google.png"
import logo from "../../img/logos/logo.png"
import "./Login.css"

const Login = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-lg-3 mx-auto logo-box">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 mx-auto login-box">
                    <h3>login with</h3>
                    <ul>
                        <li> <img src={google} alt="" /> Continue with google</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Login;