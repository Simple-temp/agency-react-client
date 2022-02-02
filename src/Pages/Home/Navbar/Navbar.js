import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../img/logos/logo.png"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container inner-container">
                    <a class="navbar-brand" href="#"><img src={logo} style={{width:"180px"}} alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link " href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Our Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Our Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" className='btn btn-dark' to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;