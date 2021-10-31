import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Myorder.css'

const Myorder = () => {
    const {user}= useAuth()
    const [single,setsingle] = useState([])
    console.log(user)
    useEffect(()=> {
        axios.get('https://guarded-reaches-98621.herokuapp.com/orders')
        .then(res=> setsingle(res.data))
    },[])
    const commonData = single.filter(oneSingle => oneSingle.email == user.email)
    console.log(commonData)
    const handleDelete = id => {
        axios.delete(`https://guarded-reaches-98621.herokuapp.com/orders/${id}`)
        .then(res => {
            if(res.data.deletedCount > 0){
                alert('Are you sure to delete?')
                const remainingOrder = commonData.filter(orderlist => orderlist._id !== id)
                setsingle(remainingOrder)
            }
        })
    }
    return (
        <div className="orderdata w-7/12 mx-auto py-10">
            <h2 className="text-4xl text-yellow-500 font-bold text-center py-10">My Orders {commonData.length}</h2>
            {
                commonData.map(singleCommon => 
                    <div key={singleCommon._id} className="allorder flex mb-5 border border-yellow-600">
                        <div>
                            <img className="order-img" src={singleCommon.order.img} alt="" />
                        </div>
                        <div className="desc px-3">
                            <h2 className="text-3xl text-yellow-400 font-semibold">{singleCommon.order.title}</h2>
                            <h3 className="text-xs text-gray-500 mb-4">Order by: {singleCommon.Name}</h3>
                            <h4 className="mb-4 text-xl">Status : <span className="text-red-600 font-bold">{singleCommon.status}</span></h4>
                            <button onClick={()=> handleDelete(singleCommon._id)} className="bg-yellow-500 px-5 text-white font-bold py-2">Delete</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Myorder;