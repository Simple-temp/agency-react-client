import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import ReviewList from '../ReviewList/ReviewList';

const UserReview = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-lg-8">
                   <ReviewList></ReviewList>
                </div>
            </div>
        </div>
    );
};

export default UserReview;