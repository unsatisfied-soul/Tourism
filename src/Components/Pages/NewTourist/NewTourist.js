import React from 'react';
import { useForm } from 'react-hook-form';
import './NewTourist.css'

const NewTourist = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    fetch('https://guarded-reaches-98621.herokuapp.com/travelPlaces',{
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
        alert('Congratulations added a new tourist spot!')
    })
  };
    return (
        <div>
            <div className="add-tourist py-6 w-7/12 mx-auto">
                <h2 className="text-yellow-500 text-center text-5xl font-bold ">Add a Tourist Spot</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-field w-2/5 mx-auto">
                    <input className="border w-full py-2 px-2 mb-2" placeholder="title"{...register("title")} /> <br />
                    <input placeholder="description" className="border w-full py-2 px-2 mb-2" {...register("desc")} /> <br />
                    <input placeholder="image link" className="border w-full py-2 px-2 mb-2" {...register("img")} /> <br />
                    <input className="bg-yellow-500 py-4 px-8 font-bold text-white mb-4" type="submit" value='Add to Tourist' />
                </div>
                
            </form>
        </div>
    );
};

export default NewTourist;