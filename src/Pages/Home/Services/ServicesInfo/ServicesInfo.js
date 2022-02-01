import React from 'react';
import { Link } from 'react-router-dom';
import "./ServicesInfo.css"

const ServicesInfo = (props) => {
    const { title, icon, des } = props.service
    return (
            <div className='col-lg-4 col-md-6 col-sm-12 text-center'>
                <div className="service-box">
                    <div className="service-head">
                    <Link to="/dashboard/usersidebar/order"><img src={`http://localhost:4000/${icon}`} style={{ width: "100px" }} alt="" /> </Link>
                    </div>
                    <div className="service-body">
                        <h5 className='mt-3'>{title}</h5>
                        <p className='mt-3'>{des}</p>
                    </div>
                </div>
            </div>
    );
};

export default ServicesInfo;