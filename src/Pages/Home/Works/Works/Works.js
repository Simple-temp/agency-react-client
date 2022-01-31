import React from 'react';
import "./Works.css"
import WorksInfo from '../WorksInfo/WorksInfo';

const Works = () => {
    return (
        <section className='works'>
            <h4 className='h4 text-white py-3 text-center'>Here are some of our <span>works</span></h4>
            <WorksInfo></WorksInfo>
        </section>
    );
};

export default Works;