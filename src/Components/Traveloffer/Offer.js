import React from 'react';
import { Link } from 'react-router-dom';

const Offer = (props) => {
    const {_id,title,desc,img} = props.service
    const split = desc.split('')
    const doted = '...';
    const shortArray = split.slice(0,200).join('').concat(doted)
    return (
        <div className="tour-details flex gap-3">
           <div className="tour-img w-1/2">
               <img className="w-full" src={img} alt="" />
           </div>
           <div className="tour-desc w-1/2 py-3 px-2">
               <h2 className="text-3xl font-bold mb-2">{title}</h2>
               <p className="text-gray-600 mb-4">{shortArray}</p>
               <Link to = {`/singletravel/${_id}`}>
                   <button className="desc-button px-4 py-2">Book Now</button>
               </Link>
           </div>
        </div>
    );
};

export default Offer;