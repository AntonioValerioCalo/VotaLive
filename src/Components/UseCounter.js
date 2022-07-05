import React, { useState } from 'react'

export default function UseCounter({initialValue=0}) {
    const[counter,setCounter]=useState(initialValue);

   const handleIncrementer=()=>{
    setCounter((c)=>c+1)
   }
  return {
       counter,
       increment:handleIncrementer,
  }
    
}
