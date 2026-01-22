import React from 'react'
import { useNavigate } from 'react-router-dom'
import Admin from './Admin';

const Home = () => {
    const navigate=useNavigate();
    const login=()=>{
        navigate("/login");
    }
     const Admin=()=>{
        navigate("/admin");
    }
    
  return (
    <div className="bg-orange-500 h-screen w-screen">
        <h1>Home</h1>
        <button onClick={login}>home button</button>
        <button onClick={Admin}>Admin button</button>
       

    
    </div>
  )
}

export default Home