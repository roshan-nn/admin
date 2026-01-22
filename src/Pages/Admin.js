import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Adduser from './Adduser';
import axios from"axios"




const Admin = () => {
  const Url= process.env.React_App_URL;
  console.log(Url)

  const[userdata, setuserdata]= useState([]);
  const[error, seterror] = useState();

  const navigate=useNavigate();

  const adder=() => {
      navigate("/add")
  }

  const alluser=() => {
      navigate("/all")
  }
   const profile=() => {
      navigate("/admin/profile")
  }

    const setting=() => {
      navigate("/admin/profile/settings")
  }

  useEffect(()=>{
    getusers()
  },[])

  const getusers=async()=>{
    try{
       const response=await axios.get(`${Url}`);
       setuserdata(response.data);
       }catch(error){
      seterror(error);

    };
    }

  return (
    <div>
         <button className="mx-4 space-y-4 border-r-4 bg-red-300"onClick={adder}>Add user</button>        
         <button onClick={alluser}>see all user</button>  
         <button onClick={profile}>profile</button>
           <button onClick={setting}>profile settings</button>

         <Adduser />     
        
    </div>        
  )
}

export default Admin