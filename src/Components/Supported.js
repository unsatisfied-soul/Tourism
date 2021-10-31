import React from 'react';
import './Supported.css'

const Supported = () => {
    return (
        <div className="supported w-4/6 mx-auto flex gap-4 pt-12">
            <div className="supported-text w-96 py-6">
                <h2 className="text-yellow-600 text-5xl mb-12">Didn't find a travel place ?? please share your best travel idea . Next time we try to provide it.</h2>
                <button className= "border px-3 py-2 bg-yellow-600 text-white font-semibold suported-btn">Send Message</button>
            </div>
            <div className="supported-img w-2/3 ">
                <img className="h-3/4 w-full" src='https://i.ibb.co/rtwNCQ4/pexels-michael-block-3225528.jpg' alt="" />
            </div>
        </div>
    );
};

export default Supported;