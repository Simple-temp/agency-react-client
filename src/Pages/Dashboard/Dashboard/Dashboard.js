import React from 'react';
import AdminSideBar from '../../Shared/AdminBar/AdminBar';
import UserSidebar from '../UserSidebar/UserSidebar/UserSidebar';

const Dashboard = () => {
    return (
        <div>
            {/* <UserSidebar></UserSidebar> */}
            <AdminSideBar></AdminSideBar>
        </div>
    );
};

export default Dashboard;