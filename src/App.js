
import './index.css';
import {Routes,Route} from "react-router-dom"
import React, { createContext, useState } from 'react'
import LoginPage from './LoginPage';
import LandingPage from "./LandingPage"
import Welcome from './Components/Welcome';

export default function App() {
 
  return (
    <div>
         
      <Routes>
        <Route path='/' element={<Welcome/>}/>
         <Route path='/LoginPageForRList' element={<LoginPage />}/>
        <Route path='/LoginPageForRList/LandingPage' element={<LandingPage/>}/>

    

          
         
          
       
         
          
         
      </Routes>
    

    </div>
  )
}
