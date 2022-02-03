import React from 'react';
import AdminBar from '../../Shared/AdminBar/AdminBar';
import UserMassegesInfo from '../UserMassegesInfo/UserMassegesInfo';

const UserMasseges = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-3">
                    <AdminBar></AdminBar>
                </div>
                <div className="col-lg-9">
                    <UserMassegesInfo></UserMassegesInfo>
                </div>
            </div>
        </div>
    );
};

export default UserMasseges;