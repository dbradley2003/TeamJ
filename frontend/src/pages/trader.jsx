import "../style/home.css"
import { useState } from 'react'


function Trader(){


    return(
        <div className="background">
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <title> Trader Profile</title>

        <header>
            <div>
                <h1 class ='title'>Trader Profile</h1>
            </div>
            <div>
                <ul class="homebar">
                    <button className="home-button">Currency Exchange</button>
                    <button className="home-button">Portfolio</button>
                </ul>
            </div>
        </header>
        <div>
            <div>
                <h1 class ='title'>Welcome!</h1>
            </div>
        </div>
        </div>

        
    );
}