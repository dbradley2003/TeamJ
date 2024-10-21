import React from "react";
import {useState,useEffect} from "react"

import { useNavigate} from 'react-router-dom';
import "../style/assetcard.css"


const Asset =({asset}) => {
    
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    

    useEffect(() => {
        

    }, []);
  

 
    return (
      <div className="p-4  transition-shadow duration-300">
      <div className="header-items flex justify-between items-center mb-2">
        <h2 className="post-title text-1lg font-bold text-blue-charcoal">{asset.currency_name}</h2>
        <span className="post-amount px-2 text-lg font-semi-bold text-gray-700">${asset.Amount.toLocaleString()}</span>
      </div>
      <p className="post-category text-sm text-gray-500">
        {/* Placeholder or dynamic content here */}
        Category: {asset.category_name || 'N/A'}
      </p>
    </div>
   
   
  );

        
}
export default Asset;