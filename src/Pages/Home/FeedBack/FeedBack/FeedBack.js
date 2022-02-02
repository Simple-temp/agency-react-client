import React, { useEffect, useState } from 'react';
import "./FeedBack.css"
import FeedBackInfo from '../FeedBackInfo/FeedBackInfo';

const FeedBack = () => {

    const [client,setClient] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:4000/getfeedback`)
        .then( res => res.json())
        .then( data => setClient(data))
    },[])

    return (
        <section className='clients'>
            <div className="container inner-container">
                <h4 className='h4 text-center pb-5'>Clients <span>Feedback</span></h4>
                <div className="row">
                    {
                        client.map( clients => <FeedBackInfo client={clients}></FeedBackInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default FeedBack;

