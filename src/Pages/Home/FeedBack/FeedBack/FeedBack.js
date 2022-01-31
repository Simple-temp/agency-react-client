import React from 'react';
import "./FeedBack.css"
import customer1 from "../../../../img/customer-1.png"
import customer2 from "../../../../img/customer-2.png"
import customer3 from "../../../../img/customer-3.png"
import FeedBackInfo from '../FeedBackInfo/FeedBackInfo';

const FeedBack = () => {

    const client = [
        {
            img : customer1,
            name : "Nash Patrik",
            title : "CEO, Manpol",
            des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nisi! Pariatur ullam et inventore.",
        },
        {
            img : customer2,
            name : "Nash Patrik",
            title : "CEO, Manpol",
            des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nisi! Pariatur ullam et inventore.",
        },
        {
            img : customer3,
            name : "Nash Patrik",
            title : "CEO, Manpol",
            des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nisi! Pariatur ullam et inventore.",
        },
    ]

    return (
        <section className='clients'>
            <div className="container">
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