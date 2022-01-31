import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h1>Logo</h1>
            <ul>
                <li> <Link to="/dashboard/usersidebar/order">Order</Link> </li>
                <li> <Link to="/dashboard/usersidebar/servicelist">service list</Link></li>
                <li> <Link to="/dashboard/usersidebar/review">review</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;