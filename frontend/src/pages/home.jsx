
import "../style/home.css"
import { useState } from 'react'
import {Link} from "react-router-dom";


function Home() {

    const [amount1, setAmount1] = useState('0.00')
    const [currency1,setCurrency1] = useState('')
    const [currency2,setCurrency2] = useState('')



    return (
      
        <div className="background">
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <title> Currency Exchanges</title>
        {/* <link rel="stylesheet" href="{% static 'style.css' %}"> */}
    
        <header>
            <div>
                <h1 className ='title'>Currency Swap</h1>
            </div>
            <div>
                <ul className="homebar">
                    <Link to="/Dashboard"><button className="home-button">Simulation</button></Link>
                    <Link to="/trader"><button className="home-button">Portfolio</button></Link>
                </ul>
            </div>
        </header>
    
        <div>
            <div>
                <h2 className = 'subtitle'>Currency History</h2>
            </div>
            {/*<div>
                render() {
                    Dataanalysis()
            </div>*/}
            <div>
                <h2 className = 'subtitle'>Currency Converter</h2>
            </div>
            <div id = "currinput">
                <div id="currinput">
                <label htmlFor={'currency1'}> </label>
                <input
                    id={'currency1'}
                    type={'text'}
                    value={currency1}
                    onChange={event => {
                    setState(event.target.value)
                    }}
                />
                </div>
                <div id="currinput">
                <label htmlFor={'currency2'}> </label>
                <input
                    id={'currency2'}
                    type={'text'}
                    value={currency2}
                    onChange={event => {
                    setState(event.target.value)
                    }}
                />
                </div>
            </div>
            <div id ="currinput">
                <p>Exchange rate</p>
                <p>How much curr1 for curr2?</p>
                <label htmlFor={'amount1'}> </label>
                <input
                    id={'amount1'}
                    type={'text'}
                    value={amount1}
                    onChange={event => {
                    setState(event.target.value)
                    }}
                />
                <div>
                    <h2>Amount: convert_currency({amount1}, {currency1}, {currency2})</h2>
                </div>
            </div>
    
        </div>
        </div>
    
   
    );
    
}


export default Home;