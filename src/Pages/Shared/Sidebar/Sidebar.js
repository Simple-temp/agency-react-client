import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"
import logo from "../../../img/logos/logo.png"

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sideBar-box">
                <div className="sidebarLogo">
                    <Link to="/"><img src={logo} style={{ width: "160px" }} alt="" /></Link>
                </div>
                <ul>
                    <li><i class="fas fa-shopping-cart"></i> <Link to="/dashboard/usersidebar/order">Order</Link> </li>
                    <li><i class="fas fa-cash-register"></i> <Link to="/dashboard/usersidebar/servicelist">service list</Link></li>
                    <li><i class="far fa-comment-dots"></i> <Link to="/dashboard/usersidebar/review">review</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;