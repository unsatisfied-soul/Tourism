import { faClock, faGlobeAsia, faPlane, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './testimonial.css'

const Textimonial = () => {
    return (
        <div className="flaticon w-4/5 mx-auto py-12">
            <h2 className="text-5xl font-bold text-center py-12">Experience Once In Your Life Time</h2>
            <div className="all-flaticon flex text-center gap-5 py-16">
                <div className="single-flaticon">
                    <FontAwesomeIcon className="text-5xl text-gray-400" icon={faUtensils}></FontAwesomeIcon>
                    <h3 className="text-yellow-500 text-2xl font-bold py-3">Food</h3>
                    <p className="text-gray-600 font-medium">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="single-flaticon">
                    <FontAwesomeIcon className="text-5xl text-gray-400" icon={faGlobeAsia}></FontAwesomeIcon>
                    <h3 className="text-yellow-500 text-2xl font-bold py-3">Travel Anywhere</h3>
                    <p className="text-gray-600 font-medium">The gladdest moment in human life, me thinks, is a departure into unknown lands- Sir Richard Burton I've used the above quote before,</p>
                </div>
                <div className="single-flaticon">
                    <FontAwesomeIcon className="text-5xl text-gray-400" icon={faPlane}></FontAwesomeIcon>
                    <h3 className="text-yellow-500 text-2xl font-bold py-3">Food</h3>
                    <p className="text-gray-600 font-medium"> We are beyond excited to finally be travelling again! We are flying to Amsterdam tomorrow, where we will spend four nights. </p>
                </div>
            </div>
        </div>
    );
};

export default Textimonial;