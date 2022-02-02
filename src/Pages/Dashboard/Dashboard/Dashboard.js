import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminSideBar from '../../Shared/AdminBar/AdminBar';
import UserSidebar from '../UserSidebar/UserSidebar/UserSidebar';

const Dashboard = () => {

    return (
        <div>
               <AdminSideBar></AdminSideBar> 
               <UserSidebar></UserSidebar>
        </div>
    );
};

export default Dashboard;

/**isAdmin */