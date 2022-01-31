import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import UserList from '../UserList/UserList';

const UserServiceList = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-lg-8">
                   <UserList></UserList>
                </div>
            </div>
        </div>
    );
};

export default UserServiceList;