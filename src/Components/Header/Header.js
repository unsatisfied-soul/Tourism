import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import useAuth from '../hooks/useAuth';


const Header = () => {
    const {user,logout} = useAuth()
    return (
        <div className="mainheader">
            <div className="header flex justify-between w-11/12 mx-auto py-8 px-6">
                <div className="logo">
                    <h2 className="text-5xl">Globe<span className="define">Trotting</span></h2>
                </div>            
                <div className="menu pt-4">
                    <Link className ="menu-li" to="/home">Home</Link>
                    {
                        user.email ?<> <Link className ="menu-li" to="/myorder">My Order</Link>
                        <Link className ="menu-li" to="/manageorder">Manage All Orders</Link>
                        <Link className ="menu-li" to="/newtourist">Add a New TouristSpot</Link>
                       
                        <button className="text-white font-bold bg-yellow-600 px-3 py-2" onClick= {logout}>Logout</button>
                    </> : <Link className ="menu-li" to="/login">
                        <button>Login</button>
                    </Link>
                    }
                    
                    
                </div>            
            </div>
        </div>
        
    );
};

export default Header;