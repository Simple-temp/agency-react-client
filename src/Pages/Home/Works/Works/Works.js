import React from 'react';
import "./Works.css"
import WorksInfo from '../WorksInfo/WorksInfo';

const Works = () => {
    return (
        <section className='works'>
            <h4 className='h4 text-white py-3 text-center'>Here are some of our <span>works</span></h4>
            <div className="container inner-container">
                <WorksInfo></WorksInfo>
            </div>
        </section>
    );
};

export default Works;