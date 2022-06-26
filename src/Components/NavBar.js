import React from 'react'
import avatar from "../assets/avatar.png" 
import { useState } from 'react'
function NavBar({name}) {
  return (
    <div>
        <div className='nav-bar d-flex p-2 bd-highlight'>
            <div className="container-img-navbar">
               <img className='avatar' src={avatar} alt=""></img>
               <p>hi,{name}</p>
            </div>

        </div>
    </div>
  )
}

export default NavBar