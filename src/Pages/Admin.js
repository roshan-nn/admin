import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from"axios"
import Adduserform from './Adduserform'

const Admin = () => {
  const Url= process.env.React_App_URL;
  const[userdata, setuserdata]= useState([]);
  const[error, seterror] = useState();
  const[formdisplay, setformdisplay] = useState(false);

  

  const navigate=useNavigate();

  const adder=() => {
      setformdisplay(true);
    
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
    console.log("user");
    try{
       const response=await axios.get(`${Url}`);
       setuserdata(response.data);
       console.log(userdata);
       }catch(error){
      seterror(error);

    };
    }

  return  (
    <div>
         <button className="mx-4 space-y-4 border-r-4 bg-red-300"onClick={adder}>Add user</button>        
         <button onClick={alluser}>see all user</button>  
         <button onClick={profile}>profile</button>
           <button onClick={setting}>profile settings</button>
   
          {formdisplay &&(
           <Adduserform
         fetchuser={()=> getusers()}
            cancelled={()=>setformdisplay(false)}/> 
          )}
        
  
        
    </div>        
  )
}

export default Admin