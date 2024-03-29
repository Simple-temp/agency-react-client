import React from 'react';
import "./FeedBackInfo.css"

const FeedBackInfo = ({ client }) => {
    const { img, title, companyName, des, image } = client;
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className="clients-box">
                <div className="client-head d-flex align-items-center">
                    {
                        image ? <img src={`data:image/png;base64,${image.img}`} style={{ width: "60px", height: "auto", borderRadius: "50px" }} ></img> :
                        <img src={`https://agency-wmb7.onrender.com/${img}`} style={{ width: "60px", height: "auto", borderRadius: "50px" }} alt="" />
                    }
                    <div className="c-h-title">
                        <h6>{title}</h6>
                        <p>{companyName}</p>
                    </div>
                </div>
                <div className="clients-body">
                    <p>{des}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedBackInfo;