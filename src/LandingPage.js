import React, { useContext, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'


import NavBar from './Components/NavBar'
import PartyList from './Components/PartyList'

export default function LandingPage(props) {
const location=useLocation()
console.log(location)
  return (
    <div><NavBar name={location.state.logedUser.name.slice(0,3)}  />
      <PartyList/>
    </div>
  )
}
