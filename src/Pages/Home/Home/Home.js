import React from 'react';
import FeedBack from '../FeedBack/FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import IsponserShip from '../IsponserShip/IsponserShip';
import Services from '../Services/Services/Services';
import Works from '../Works/Works/Works';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <IsponserShip></IsponserShip>
            <Services></Services>
            <Works></Works>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;