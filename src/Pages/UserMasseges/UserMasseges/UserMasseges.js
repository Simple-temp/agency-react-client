import React from 'react';
import AdminBar from '../../Shared/AdminBar/AdminBar';
import UserMassegesInfo from '../UserMassegesInfo/UserMassegesInfo';

const UserMasseges = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <AdminBar></AdminBar>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12">
                    <UserMassegesInfo></UserMassegesInfo>
                </div>
            </div>
        </div>
    );
};

export default UserMasseges;