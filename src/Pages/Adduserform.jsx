import React, { useState } from 'react'
import axios from 'axios';



const Adduserform = ({cancelled, fetchuser}) => {
  const[userInputData, setUserInputData]=useState({
    name: "",
    dob:"",
    age:"",
    email:"",
    mobile:"",
    address:""

  })
   const Url= process.env.React_App_URL;

  const userinputchange= (e)=>{
    console.log(e.target)
    const {name,value}=e.target
    
  setUserInputData({
    ...userInputData,
    [name]: value
  });

};

const submit=async(e)=>{
  e.preventDefault();
  console.log("submit button clicked");
  try{
      const response=await axios.post(`${Url}`,userInputData )
      console.log(response,"respons");
      if(response.data){
         fetchuser()
       cancelled()
       
      }
    }
  catch(error){
    console.log("data is fetched");
  }

}

return (
    <div>
        <form>
            {/* <label>name</label> */}
            <label>name:
                <input onChange={userinputchange} className="bg-blue-300"  type="name" value={userInputData.name}name="name" />
            </label>
            <label>dob:
                <input onChange={userinputchange} className="bg-emerald-400" type="dob" value={userInputData.dob} name="dob" />
                </label>
                <label>age:
                <input onChange={userinputchange} className="border-t-2 bg-amber-200" type="age"  value={userInputData.age} name="age"/>
                </label>
                <label>email:
                 <input onChange={userinputchange} type="email" value={userInputData.email} name="email"/>

                </label>mobile:
                <label>
                  <input onChange={userinputchange} type="number" value={userInputData.mobile} name="number" />
                </label>
                <label>address:
                  <input onChange={userinputchange} type="address" value={userInputData.address} name="address"/>
                </label>
                <button onClick={submit}>Submit</button>
                <button onClick={cancelled}>cancel button</button>

            
        </form>
    </div>
  )
}

export default Adduserform