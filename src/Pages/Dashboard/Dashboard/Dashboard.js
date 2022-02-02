import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminSideBar from '../../Shared/AdminBar/AdminBar';
import UserSidebar from '../UserSidebar/UserSidebar/UserSidebar';

const Dashboard = () => {

    const [loggedInuserInfo, setLoggedInuserInfo] = useContext(UserContext)
    const [isadmin, setisAdmin] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:4000/isAdmin`, {
            method: 'POST',
            body: JSON.stringify({admin : loggedInuserInfo.email}),
            headers: {'Content-type': 'application/json;'}
        })
        .then(res=>res.json())
        .then(data=>setisAdmin(data))
    }, [])

    return (
        <div>
            {
              isadmin ? <AdminSideBar></AdminSideBar> : <UserSidebar></UserSidebar>
            }
        </div>
    );
};

export default Dashboard;

/**isAdmin */