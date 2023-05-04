import React from 'react';
import { Link } from 'react-router-dom';
import "./ServicesInfo.css"

const ServicesInfo = (props) => {
    const { title, icon, des ,image } = props.service
    return (
            <div className='col-lg-4 col-md-6 col-sm-12 text-center'>
                <div className="service-box">
                    <div className="service-head">
                        {
                            image ? <Link to="/dashboard/usersidebar/order"><img src={`data:image/png;base64,${image.img}`} style={{ width: "100px" }} ></img></Link> :
                            <Link to="/dashboard/usersidebar/order"><img src={`https://agency-wmb7.onrender.com/${icon}`} style={{ width: "100px" }} alt="" /> </Link>
                        }
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