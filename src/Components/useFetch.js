
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function useFetch() {
  const navigate =useNavigate();
const [data, setData]=useState();
const [user,setUser]=useState({username:"", password:""})
const [logedUser,setLogedUser]= useState()
const [toLanding, setToLanding]=useState(false)



async function handleFetch(){
  const response= await fetch('https://jsonplaceholder.typicode.com/todos/');
  const json= await response.json() ;
   setData(json);
  


   
  }
  useEffect(()=>{
   handleFetch()
  },[])
 
  // const handleInput=(event)=>{
  //   const{name,value} = event.target
  //  setUser((user)=>{
  //   return{
  //     ...user,
  //     [name]:value
  //   }
  //  })
  
  // }
  // const handleSubmit=()=>{
  //   const foundUserTitle=data.find(value=>value.title === user.username)
  //   if(foundUserTitle){
  //   setLogedUser({
  //     name:user.username
  //   })
  //   setToLanding(true)
    
  // }
  
  // }
  return{
    data,
    // logedUser,
    // toLanding,
    // navigate,
    // addUsername:handleInput,
    // submit:handleSubmit, 
    // user,
   
     
  
  } 

    
  
}

export default useFetch