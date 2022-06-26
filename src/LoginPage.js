

import React, {  useEffect, useState } from "react"
import { Routes, useNavigate, Route  } from "react-router-dom";
import useFetch from "./Components/useFetch";
import LandingPage from "./LandingPage";




export default function LoginPage() {
  const navigate =useNavigate();
  const [user, setUser] = useState({username:"", password:"",})
  const [logedUser, setLogedUser] = useState ()
  const [toLanding,setToLanding]=useState(true)
  const {data} = useFetch();
  const {username, password} = user;
 

  
  const handleInput=(event)=>{
    const {name,value,} = event.target
    setUser((user=>{
      return{
        ...user,
        [name]:value
      }
    }))
    
    
  }
  useEffect((username)=>{
    setLogedUser({
      name:user.username
    })

  },[user.username])
  



const handleSubmit=()=>{
const foundUserTitle=data.find(value=>value.title === user.username);
if(!foundUserTitle){
  
  setToLanding(false)
  
}else{
  navigate("./LandingPage",{state:{logedUser}}) 
  

}

}
return (


(toLanding ?
   <div className='Login-Page'>
      <form  className=" container-form d-flex align-items-center flex-column bd-highlight gap-3">
         <h1>welcome,{}</h1>
         <input  value={username} className='input-style ' onChange={handleInput}  name='username' placeholder='Username' />
         <input  className='input-style' onChange={handleInput} value={password}name='password' type="password" placeholder="Password"/>
          
                 <button type='button' onClick={handleSubmit} className="btn btn-outline-warning"> Login </button>
        
        </form>
        
  
      </div>
  

  

 
  
 



: 
    
<div className='Login-Page'>
<form  className=" container-form d-flex align-items-center flex-column bd-highlight gap-2">
  <div className="d-flex align-items-center flex-column">
   <h1>welcome,{logedUser.name}</h1>
   <p> you have not creted an account, create your account now here </p>

  </div>
   
   <input   className='input-style ' />
   <input  className='input-style' />
    
           <button type='button'  className="btn btn-outline-warning"> Login </button>
  
  </form>
  

</div>)
  )
    
}


