import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../img/logos/logo.png"

const AdminBar = () => {
    return (
        <div className='sidebar'>
            <div className="sideBar-box">
                <div className="sidebarLogo">
                    <Link to="/"><img src={logo} style={{ width: "160px" }} alt="" /></Link>
                </div>
                <ul>
                    <li><i class="fas fa-cash-register"></i> <Link to="/dashboard/adminsidebar/servicelist">service list</Link> </li>
                    <li><i class="fas fa-plus-circle"></i> <Link to="/dashboard/adminsidebar/addservice">add service</Link></li>
                    <li><i class="fas fa-user-check"></i> <Link to="/dashboard/adminsidebar/makeadmin">make admin</Link></li>
                    <li><i class="fas fa-comment-alt"></i> <Link to="/dashboard/adminsidebar/massegeinfo">Massseges</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default AdminBar;