import React from 'react';
import Supported from '../../Supported';
import Textimonial from '../../Testimonial/Textimonial';
import Traveloffer from '../../Traveloffer/Traveloffer';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Traveloffer></Traveloffer>
            <Textimonial></Textimonial>
            <Supported></Supported>
        </div>
    );
};

export default Home;