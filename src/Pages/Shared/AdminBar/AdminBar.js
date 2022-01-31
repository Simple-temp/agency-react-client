import React from 'react';
import { Link } from 'react-router-dom';

const AdminBar = () => {
    return (
        <div className='sidebar'>
            <h1>Logo</h1>
            <ul>
                <li> <Link to="/dashboard/adminsidebar/servicelist">service list</Link> </li>
                <li> <Link to="/dashboard/adminsidebar/addservice">add service</Link></li>
                <li> <Link to="/dashboard/adminsidebar/makeadmin">make admin</Link></li>
            </ul>
        </div>
    );
};

export default AdminBar;