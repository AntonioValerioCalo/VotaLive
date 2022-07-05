
import React, { useEffect, useState } from 'react'


function useFetch() {

const [data, setData]=useState();




async function handleFetch(){
  // const response= await fetch('https://jsonplaceholder.typicode.com/todos/');
  const response = await fetch("https://dummyjson.com/users")
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
 
    // toLanding,
    // navigate,
    // addUsername:handleInput,
    // submit:handleSubmit, 
    // user,
   
     
  
  } 

    
  
}

export default useFetch