
import "../style/home.css"
import { useState } from 'react'


function Home() {

    const [amount1, setAmount1] = useState('')



    const handleClick = () => {
        // 👇 "message" stores input field value
        setUpdated(amount1);
      };


    return (
      
        <div className="background">
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <title> Currency Exchanges</title>
        {/* <link rel="stylesheet" href="{% static 'style.css' %}"> */}
    
        <header>
            <div>
                <h1 class ='title'>Currency Swap</h1>
            </div>
            <div>
                <ul class="homebar">
                    <button className="home-button">Simulation</button>
                    <button className="home-button">Portfolio</button>
                </ul>
            </div>
        </header>
    
        <div>
            <div>
                <h2 class = 'subtitle'>Trader History</h2>
            </div>
            <div>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@4.2.1/dist/chart.umd.min.js"></script>
                <canvas id="chart"></canvas>
            </div>
            <div>
                <h2 class = 'subtitle'>Currency Converter</h2>
            </div>
            <div id = "currinput">
                <div id="currinput">
                <label htmlFor="cars">Choose a currency:</label>
                    <select name="cars" id="cars">
                        <option value="volvo">USD</option>
                        <option value="saab">MXN</option>
                        <option value="mercedes">CAD</option>
                        <option value="audi">JPY</option>
                    </select>
                </div>
                <div id="currinput">
                <label htmlFor="cars">Choose a currency:</label>
                    <select name="cars" id="cars">
                        <option value="volvo">USD</option>
                        <option value="saab">MXN</option>
                        <option value="mercedes">CAD</option>
                        <option value="audi">JPY</option>
                    </select>
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
                    <h2>Amount: {amount1}</h2>
                </div>
            </div>
    
        </div>
        </div>
    
   
    );
    
}


export default Home;