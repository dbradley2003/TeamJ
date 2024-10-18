import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"

import Register from "./pages/register"
import Main from "./pages/front"
import Login from "./pages/login"
import Home from "./pages/home"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {


  
  return (
     <BrowserRouter>

      <Routes>    
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      </Routes> 

       
     </BrowserRouter> 

    
  )
          }
    

export default App
