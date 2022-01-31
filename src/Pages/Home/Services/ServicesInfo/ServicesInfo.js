import React from 'react';
import "./ServicesInfo.css"

const ServicesInfo = (props) => {
    const {name,img,des} = props.service
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 text-center'>
            <div className="service-box">
                <div className="service-head">
                    <img src={img} style={{width:"100px"}} alt="" />
                </div>
                <div className="service-body">
                    <h5 className='mt-3'>{name}</h5>
                    <p className='mt-3'>{des}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesInfo;