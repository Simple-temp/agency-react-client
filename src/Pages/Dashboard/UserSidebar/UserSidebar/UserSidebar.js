import React from 'react';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import UserSidebarDetails from '../UserSidebarDetails/UserSidebarDetails';

const UserSidebar = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-lg-9">
                    <UserSidebarDetails></UserSidebarDetails>
                </div>
            </div>
        </div>
    );
};

export default UserSidebar;