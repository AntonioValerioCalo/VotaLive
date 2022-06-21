
import './index.css';
import {Routes,Route} from "react-router-dom"
import React from 'react'
import LoginPage from './LoginPage';
import LandingPage from "./LandingPage"
export default function App() {

  return (
    <div>
      <Routes>
         <Route path='/' element={<LoginPage />}/>
         <Route path='/LandingPage' element={<LandingPage/>}/>
          
         
      </Routes>

    </div>
  )
}
