import { BrowserRouter } from "react-router-dom";

import React from 'react'
import App from "./App";

export default function Root() {
  return (
    <div>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </div>
    
  )
}
