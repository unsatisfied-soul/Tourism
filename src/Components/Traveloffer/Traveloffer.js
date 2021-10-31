import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Offer from './Offer';
import './Traveloffer.css'

const Traveloffer = () => {
    const [services,setServices] = useState([])
    const [loading,setLoading] = useState(true)
    console.log(loading)
    if(loading){
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
    }
    useEffect(()=> {
       if(services.length == 0){
           setLoading(true)
       }
        axios.get('https://guarded-reaches-98621.herokuapp.com/travelPlaces')
        .then(res=> {
            setServices(res.data)
            
        })
    },[])
    return (
        <div className= "traveloffer w-11/12 mx-auto mb-10">
            <h2 className="travel-offer-heading font-bold text-6xl text-center py-16">Our Plans</h2>
            <div className="single-travel gap-8">
                {
                    services.map(service => <Offer
                        key = {service._id}
                        service = {service}
                    ></Offer>)
                }
            </div>
            
            
        </div>
    );
};

export default Traveloffer;