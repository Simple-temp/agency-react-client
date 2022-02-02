import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"
import logo from "../../../img/logos/logo.png"
import { UserContext } from '../../../App';

const Sidebar = () => {

    const [loggedInuserInfo, setLoggedInuserInfo] = useContext(UserContext)
    const [isadmin, setisAdmin] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:4000/isAdmin`, {
            method: 'POST',
            body: JSON.stringify({ email: loggedInuserInfo.email }),
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => setisAdmin(data))
    }, [])

    return (
        <div className='sidebar'>
            <div className="sideBar-box">
                <div className="sidebarLogo">
                    <Link to="/"><img src={logo} style={{ width: "160px" }} alt="" /></Link>
                </div>
                <ul>
                    {
                        isadmin ? <div>
                            <li><i class="fas fa-cash-register"></i> <Link to="/dashboard/adminsidebar/servicelist">service list</Link> </li>
                            <li><i class="fas fa-plus-circle"></i> <Link to="/dashboard/adminsidebar/addservice">add service</Link></li>
                            <li><i class="fas fa-user-check"></i> <Link to="/dashboard/adminsidebar/makeadmin">make admin</Link></li>
                        </div> :
                            <div>
                                <li><i class="fas fa-shopping-cart"></i> <Link to="/dashboard/usersidebar/order">Order</Link> </li>
                                <li><i class="fas fa-cash-register"></i> <Link to="/dashboard/usersidebar/servicelist">service list</Link></li>
                                <li><i class="far fa-comment-dots"></i> <Link to="/dashboard/usersidebar/review">review</Link></li>
                            </div>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Sidebar;