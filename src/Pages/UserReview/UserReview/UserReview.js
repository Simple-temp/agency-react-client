import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import ReviewList from '../ReviewList/ReviewList';

const UserReview = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-lg-9">
                   <ReviewList></ReviewList>
                </div>
            </div>
        </div>
    );
};

export default UserReview;