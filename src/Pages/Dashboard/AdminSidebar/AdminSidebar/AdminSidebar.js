import React from 'react';
import AdminBar from '../../../Shared/AdminBar/AdminBar';
import AdminSidebarInfo from '../AdminSidebarInfo/AdminSidebarInfo';

const AdminSidebar = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-3">
                    <AdminBar></AdminBar>
                </div>
                <div className="col-lg-9">
                    <AdminSidebarInfo></AdminSidebarInfo>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;