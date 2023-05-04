import React, { useEffect, useState } from 'react';
import "./Services.css"
import ServicesInfo from '../ServicesInfo/ServicesInfo';
import loading from "../../../../img/loading.gif"

const Services = () => {


    const [services,setServices]=useState([])

    useEffect(()=>{
        fetch(`https://agency-wmb7.onrender.com/getnewservices`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <section>
            <div className='container mt-5 py-5 inner-container'>
                <h4 className='h4 mb-5 text-center'>Provide awesome <span>services</span></h4>
                <div className="row">
                    {
                        services.length === 0 ? <img src={loading} style={{width:"500px"}} className='mx-auto' alt="" /> :
                        services.map(service => <ServicesInfo service={service}></ServicesInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;
