

import { useNavigate } from 'react-router-dom';

import PopupMenu from '../components/popupmenu';
import "../style/front.css"

function Main() {


    return (

<div className=" text-white min-h-screen bg-gray-900 backdrop-blur-md bg-cover ">
    
      <PopupMenu />

      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center">Welcome to Our Homepage</h1>
        <p className="text-center mt-4">Your amazing tagline goes here.</p>
      </div>
    </div>


    
       
    );
}

export default Main;
