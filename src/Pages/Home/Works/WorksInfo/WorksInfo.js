import React from 'react';
import "./WorksInfo.css"
import carousel1 from "../../../../img/carousel-1.png"
import carousel2 from "../../../../img/carousel-2.png"
import carousel3 from "../../../../img/carousel-3.png"
import carousel4 from "../../../../img/carousel-4.png"
import carousel5 from "../../../../img/carousel-5.png"

const WorksInfo = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators con">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="1000">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="img-box">
                                    <img src={carousel1} style={{ width: "100%", height: "350px" }} alt="img" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="img-box">
                                    <img src={carousel2} style={{ width: "100%", height: "350px" }} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="1000">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="img-box">
                                    <img src={carousel2} style={{ width: "100%", height: "350px" }} alt="img" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="img-box">
                                    <img src={carousel3} style={{ width: "100%", height: "350px" }} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="1000">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="img-box">
                                    <img src={carousel3} style={{ width: "100%", height: "350px" }} alt="img" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="img-box">
                                    <img src={carousel4} style={{ width: "100%", height: "350px" }} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="1000">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="img-box">
                                    <img src={carousel4} style={{ width: "100%", height: "350px" }} alt="img" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="img-box">
                                    <img src={carousel5} style={{ width: "100%", height: "350px" }} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button> */}
            </div>
        </div>
    );
};

export default WorksInfo;
