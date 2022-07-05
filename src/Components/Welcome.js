import React from 'react'
import { Link } from 'react-router-dom';
import bandieraItaliana from "../assets/bandieraItaliana.jpg";
import rappresentanteDiLista from "../assets/rappresentanteDiLista.jpg"
export default function Welcome() {
  return (
    <div className=' container-welcome align-items-center d-flex justify-content-around' >
      <div className='container-link-welcome'>
      <p>Presidente Partito</p>
      <Link  to="/LoginPageForRList">
      
        <img className='buttonWelcome' src={bandieraItaliana} alt="bandiera"></img>
         </Link>
      </div>
      <div className='container-link-welcome'>
          <p>Rappresentante di lista</p>
         <Link to="/LoginPageForRList">
        
          <img  className='buttonWelcome' src={rappresentanteDiLista} alt="rappresentanteDiLista"></img>
               </Link>
      </div>
         {/* <button className="buttonWelcome" style={{
            backgroundImage: `url(${bandieraItaliana})`,
            backgroundRepeat:"no-repeat",
         }}/>
           
         <button className='buttonWelcome' style={{
            backgrounImage:`url(${rappresentanteDiLista})`,
            backgroundRepeat:"no-repeat"
         }}/> */}
    </div>
  )
}
