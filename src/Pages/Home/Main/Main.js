import React from 'react';
import Frame from "../../../img/logos/Frame.png"
import "./Main.css"

const Main = () => {
    return (
        <div className='container mt-4 inner-container'>
            <div className="row">
                <div className="col-lg-5 col-md-6 col-sm-10 mx-auto d-flex align-items-center">
                    <div className="main-box">
                        <h1>Let's Grow Your <br /> Brand To The <br /> Next Level</h1>
                        <p className='mt-3 w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vitae atque architecto cupiditate quis quas neque ducimus corporis voluptatum amet!</p>
                        <button className='btn btn-dark mt-3'>Hire us!</button>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6 col-sm-10 mx-auto">
                    <img src={Frame} alt="" className='img-fluid' />
                </div>
            </div>
        </div>
    );
};

export default Main;