import React from 'react';
import AdminBar from '../../Shared/AdminBar/AdminBar';
import MakeAdminOther from '../MakeAdminOther/MakeAdminOther';

const MakeAdmin = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-3">
                    <AdminBar></AdminBar>
                </div>
                <div className="col-lg-9">
                    <MakeAdminOther></MakeAdminOther>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;