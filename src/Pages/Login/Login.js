import React, { useContext } from 'react';
import google from "../../img/logos/google.png"
import logo from "../../img/logos/logo.png"
import "./Login.css"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

initializeApp(firebaseConfig);

const Login = () => {

    const [loggedInuserInfo, setLoggedInuserInfo] = useContext(UserContext)
    const provider = new GoogleAuthProvider();
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const googleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const {displayName,email,photoURL} = result.user;
                const UserInfo = { name : displayName , email : email , img : photoURL}
                setLoggedInuserInfo(UserInfo)
                navigate(from, { replace: true });
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
            });
    }

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
                        <li onClick={googleSignIn} > <img src={google} alt="" /> Continue with google</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Login;