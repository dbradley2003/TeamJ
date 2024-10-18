import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"

import Main from "./pages/front"
import Home from "./pages/home"



function App() {


  
  return (
     <BrowserRouter>

      <Routes>    

      <Route path="/main" element={<Main />} />
      <Route path="/home" element={<Home />} />
      </Routes> 

       
     </BrowserRouter> 

    
  )
          }
    

export default App
