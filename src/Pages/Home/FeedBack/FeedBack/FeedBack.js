import React, { useEffect, useState } from 'react';
import "./FeedBack.css"
import FeedBackInfo from '../FeedBackInfo/FeedBackInfo';
import loading from "../../../../img/loading.gif"

const FeedBack = () => {

    const [client,setClient] = useState([])

    useEffect(()=>{
        fetch(`https://agency-wmb7.onrender.com/getfeedback`)
        .then( res => res.json())
        .then( data => setClient(data))
    },[])

    return (
        <section className='clients'>
            <div className="container inner-container">
                <h4 className='h4 text-center pb-5'>Clients <span>Feedback</span></h4>
                <div className="row">
                    {
                        client.length === 0 ? <img src={loading} style={{width:"500px"}} className='mx-auto' alt="" /> :
                        client.map( clients => <FeedBackInfo client={clients}></FeedBackInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default FeedBack;

