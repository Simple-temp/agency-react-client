import React from 'react';
import AdminBar from '../../Shared/AdminBar/AdminBar';
import AdminReviewItem from '../AdminReviewItem/AdminReviewItem';

const AdminReview = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-3">
                    <AdminBar></AdminBar>
                </div>
                <div className="col-lg-9">
                    <AdminReviewItem></AdminReviewItem>
                </div>
            </div>
        </div>
    );
};

export default AdminReview;