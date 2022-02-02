import React, { useEffect, useState } from 'react';
import "./Services.css"
import ServicesInfo from '../ServicesInfo/ServicesInfo';

const Services = () => {


    const [services,setServices]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:4000/getnewservices`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <section>
            <div className='container mt-5 py-5 inner-container'>
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
