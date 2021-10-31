import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {useParams} from 'react-router'
import useAuth from '../../hooks/useAuth';


const Singletravel = () => {
    const {user} = useAuth()
    const {id} = useParams();
    const [singletravel, setsingletravel] = useState({})
    useEffect(()=> {
        axios.get(`https://guarded-reaches-98621.herokuapp.com/travelPlaces/${id}`)
        .then(res=> {
        setsingletravel(res.data)
    })
    },[])
    
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        data.order = singletravel;
        fetch('https://guarded-reaches-98621.herokuapp.com/orders',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            res.json()
        })
        .then(result=> {
            reset()
            alert('Congratulations your order add successfully!')
        })

    } 
    return (
        <div className="single-travels w-4/6 mx-auto">
            <div className="single-details ">
                <img className="w-full" src={singletravel.img} alt="" />
                <h2 className="text-4xl text-yellow-500 py-6">{singletravel.title}</h2>
                <p className="text-gray-500">{singletravel.desc}</p>
            </div>

            <div className="place-booking">
                <h2 className="text-yellow-500 text-5xl text-center py-8">Confirm Your Booking</h2>
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                   <div className="input-all w-4/6 mx-auto">
                    <input className="border w-full  py-2 text-xl px-2 mb-2" defaultValue={user.displayName} {...register("Name", { required: true, maxLength: 20 })}  /> <br />
                        <input className="border w-full py-2 text-xl px-2 mb-2" defaultValue={user.email} {...register("email", { required: true, maxLength: 20 })}  /> <br />
                        <input className="border w-full py-2 text-xl px-2 mb-2" placeholder='Address' {...register("address", { required: true, maxLength: 20 })}  /> <br />
                        <input className="border w-full py-2 text-xl px-2 mb-2" placeholder="phonenumber" type="number" {...register("number")} /> <br />
                        <input className="border w-full py-2 text-xl hidden px-2 mb-2" defaultValue='Pending' {...register("status", { required: true, maxLength: 20 })}  />
                        <input className="border mb-4 py-3 px-8 bg-yellow-600 text-white" type="submit" value="Confirm order" />

                   </div>
                </form>
            </div>
        </div>
    );
};

export default Singletravel;