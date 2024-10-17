import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"

import Main from "./pages/front"



function App() {


  
  return (
     <BrowserRouter>

      <Routes>    

      <Route path="/main" element={<Main />} />
      </Routes> 

       
     </BrowserRouter> 

    
  )
          }
    

export default App
