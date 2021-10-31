import {getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import React, { useState } from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import InitAuthentication from '../../../Firebase/Firebase.init';
import './Registration.css'


InitAuthentication();

const Registration = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [name,setName] = useState('')
    const [error,seterror] = useState('')
    const location = useLocation()
    const history = useHistory()
    const handleRegistration = e => {
        const auth = getAuth()
        e.preventDefault()
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = (result.user);
            console.log(user)
            history.push(location.state?.from || '/home')
            userName()
            seterror('')
        })
        .catch(error => {
            seterror('sorry this email already use')
        })
        const userName = () =>{
            updateProfile(auth.currentUser,{displayName: name})
            .then(result=> {

            })
        }
    
        
    }
   
    const handleEmail = (e) => {
        setemail(e.target.value)
    }
    const handlepas = (e) => {
        setpassword(e.target.value)
    }
    const handleNmae = e => {
        setName(e.target.value)
        console.log(name)
    }
    return (
        <div className="register py-6">
        <h2 className="text-4xl mb-8 font-bold text-center">Register Now</h2>
        <div className="register-details">
            <form onSubmit={handleRegistration}>
            <div className="data mb-4">
                <label className="text-xl font-bold">Name</label>
                <input className="border border-black w-full h-11 mt-3 px-2" onBlur={handleNmae} type="text" required/>
            </div>
            <div className="data mb-4">
                <label className="text-xl font-bold">Email</label>
                <input onBlur={handleEmail} className="border border-black w-full h-11 mt-3 px-2" type="email" required/>
            </div>
            <div className="data mb-4">
                <label className="text-xl font-bold">Password</label>
                <input onBlur={handlepas} className="border border-black w-full h-11 mt-3 px-2" type="password"  required/>
            </div>
                <p className="text-red-600 text-xl font-bold">{error}</p>
            <div className="inner mb-8">
                <input className="inner-btn px-10 py-3 font-bold text-white bg-yellow-500" type="submit" value="Register"/>
            </div>
            </form>
            
            <div className="register-iform">
                <p className="text-lg">Already have an account? <Link className="register-l font-bold" to="/login">Log in</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Registration;