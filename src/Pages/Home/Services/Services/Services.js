import React from 'react';
import "./Services.css"
import service1 from "../../../../img/icons/service1.png";
import service2 from "../../../../img/icons/service2.png";
import service3 from "../../../../img/icons/service3.png";
import ServicesInfo from '../ServicesInfo/ServicesInfo';

const Services = () => {

    const services = [
        {
            name: "Web & Mobile design",
            img: service1,
            des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus laborum eos ut eveniet temporibus! Animi, cupiditate!",
        },
        {
            name: "Graphic design",
            img: service2,
            des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus laborum eos ut eveniet temporibus! Animi, cupiditate!",
        },
        {
            name: "Web development",
            img: service3,
            des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus laborum eos ut eveniet temporibus! Animi, cupiditate!",
        },
    ]

    return (
        <section>
            <div className='container mt-5 py-5'>
                <h4 className='h4 mb-5 text-center'>Provide awesome <span>services</span></h4>
                <div className="row">
                    {
                        services.map(service => <ServicesInfo service={service}></ServicesInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;