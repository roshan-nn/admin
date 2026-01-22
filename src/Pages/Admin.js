import React from 'react'
import { useNavigate } from 'react-router-dom'
import Adduser from './Adduser';


const Admin = () => {

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

  return (
    <div>
         <button class="mx-4 space-y-4 border-r-4 bg-red-300"onClick={adder}>Add user</button>        
         <button onClick={alluser}>see all user</button>  
         <button onClick={profile}>profile</button>
           <button onClick={setting}>profile settings</button>

         <Adduser />     
        
    </div>        
  )
}

export default Admin