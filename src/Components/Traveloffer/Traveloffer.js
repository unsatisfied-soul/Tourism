import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Offer from './Offer';
import './Traveloffer.css'

const Traveloffer = () => {
    const [services,setServices] = useState([])
    const [loading,setLoading] = useState(false)
    
    useEffect(()=> {
        axios.get('https://guarded-reaches-98621.herokuapp.com/travelPlaces')
        .then(res=> {
            setServices(res.data)
        })
       setLoading(true)
    },[])
    return (
        <div className= "traveloffer w-11/12 mx-auto mb-10">
            <h2 className="travel-offer-heading font-bold text-6xl text-center py-16">Our Plans</h2>

            {services.length == 0 ?  <div className="animate-pulse mx-auto">
                    <div className="rounded-full bg-yellow-500 h-12 w-12 mx-auto"></div>
                </div> : <div className="single-travel gap-8">
                {
                    services.map(service => <Offer
                        key = {service._id}
                        service = {service}
                    ></Offer>)
                    
                }
               
            </div>}
                
            
        </div>
    );
};

export default Traveloffer;