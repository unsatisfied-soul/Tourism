import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Registration.css'
import InitAuthentication from '../../../Firebase/Firebase.init';

InitAuthentication()
const Login = () => {
    const {user} = useAuth();
    const location = useLocation()
    const history = useHistory()
    const [email, setemail] = useState('')
    const [password, setpas] = useState('')
    const [error, seterror] = useState('')
    const handlesubmit = (e) => {
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            history.push(location.state?.from || '/home')
            seterror('')
        
          })
          .catch(error => {
                seterror('email or password wrong please try again')
          })
    }
    const handemail = (e) => {
        setemail(e.target.value)
    }
    const handpas = (e) => {
        setpas(e.target.value)
    }
    console.log(user)
    return (
        <div className="login py-8 px-3">
            <h2 className="text-4xl mb-8 font-bold text-center">Login Form</h2>
            <div className="login-details">
                <form onSubmit={handlesubmit}>
                <div className="data mb-4">
                    <label className="text-xl font-bold">Email</label>
                    <input onBlur={handemail} className="border border-black w-full h-11 mt-3 px-2 log-input" type="email" required/>
                </div>
                <div className="data mb-4">
                    <label className="text-xl font-bold">Password</label>
                    <input onBlur={handpas} className="border w-full h-11 mt-3 border-black px-3 log-input" type="password"  required/>
                </div>
                <p className="text-xl text-red-600">{error}</p>
                <div className="inner mb-8">
                    <input className="inner-btn px-10 py-3 font-bold text-white bg-yellow-500" type="submit" value="Login"/>
                </div>
                </form>

                {
                    !user.displayName &&  <div className="register-iform">
                    <p className="text-lg">Don't have an account? <Link className="register-l font-bold" to="/register">Register Now</Link></p>
                    </div>
                }
               
            </div>
        </div>
    );
};

export default Login;