import React, { useState } from "react"


export default function LoginPage() {
const {data, setData} = useState({username:"", password:"",})
const {username, password} = data;
function handleInput(event){
  
  setData({...data,[event.target.name]:[event.target.value]})
}

function handleSubmit(){
  console.log(data)
}
  return (
    <div className='Login-Page'>
  
      <div onSubmit={handleSubmit}  className=" container-form d-flex align-items-center flex-column bd-highlight gap-3">
         <input onChange={handleInput} value={username} className='input-style '  name='username' placeholder='Username' />
         <input onChange={handleInput} className='input-style' value={password}name='password' type="password" placeholder="Password"/>
 
          <button type='button'  className="btn btn-outline-warning"> Login</button>
        <div>
        </div>
  
      </div>
      </div>
    )
}

