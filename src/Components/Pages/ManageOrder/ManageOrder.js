import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './ManageOrder.css'

const ManageOrder = () => {
    const [single,setsingle] = useState([]);

    console.log(single)
    useEffect(()=> {
        axios.get('https://guarded-reaches-98621.herokuapp.com/orders')
        .then(res=> setsingle(res.data))
    },[])
    

    const handleDelete = id => {
        axios.delete(`https://guarded-reaches-98621.herokuapp.com/orders/${id}`)
        .then(res => {
            if(res.data.deletedCount > 0){
                alert('Are you sure to delete?')
                const remainingOrder = single.filter(orderlist => orderlist._id !== id)
                setsingle(remainingOrder)
            }
        })
    }
    const handleClick = (id) => {
        const load = 'Approved'
    }
    return (
        <div className="orderdata w-7/12 mx-auto py-10">
            <h2 className="text-4xl text-yellow-500 font-bold text-center py-10">Client Order {single.length}</h2>
            {
                single.map(singleCommon => 
                    <div key ={single._id} className="allorder flex mb-5 border border-yellow-600">
                        <div>
                            <img className="order-img" src={singleCommon.order.img} alt="" />
                        </div>
                        <div className="desc px-3">
                            <h2 className="text-3xl text-yellow-400 font-semibold">{singleCommon.order.title}</h2>
                            <div className="order-people flex justify-between gap-3">
                                <h4 className="text-xs text-gray-500 mb-4">Order Name: <span className="text-yellow-600 font-bold">{singleCommon.Name}</span></h4>
                                <h4 className="text-xs text-gray-500 mb-4">Order form: <span className="text-yellow-600 font-bold">{singleCommon.email}</span></h4>
                            </div>
                            <h5 className="">Address : <span className="text-yellow-600 font-bold">{singleCommon.address}</span></h5>
                            <h6 className="mb-2">PhoneNumber : <span className="text-yellow-600 font-bold">{singleCommon.number}</span></h6>
                            <h4 className="mb-4 text-xl ">Status : <span className="text-red-500 font-bold">{singleCommon.status}</span></h4>
                            <button onClick={()=> handleDelete(singleCommon._id)} className="bg-yellow-500 px-5 text-white font-bold py-2">Delete</button>
                            <button onClick={()=>handleClick(singleCommon._id)} className="bg-yellow-500 px-5 ml-2 text-white font-bold py-2">Approved</button>
                            
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ManageOrder;