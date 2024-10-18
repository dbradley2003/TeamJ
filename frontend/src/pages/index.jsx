function Home() {


    return (



        <div>
        
        
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
            <title> Currency Exchanges</title>
            <link rel="stylesheet" href="{% static 'style.css' %}">
        
            <header>
                <div>
                    <h1>Currency Exchange</h1>
                </div>
                <div>
                    <ul class="homebar">
                        <button style = "display: inline;">Simulation</button>
                        <button style="display: inline;">Tools</button>
                        <button style="display: inline;">Account</button>
                    </ul>
                </div>
            </header>
        
            <div>
                <div>
                    <h2>Trader History</h2>
                </div>
                <div>
                    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.2.1/dist/chart.umd.min.js"></script>
                    <canvas id="chart"></canvas>
                </div>
                <div>
                    <h2>Currency Converter</h2>
                </div>
                <div id = "currinput">
                    <div id="currinput">
                    <label for="cars">Choose a currency:</label>
                        <select name="cars" id="cars">
                            <option value="volvo">USD</option>
                            <option value="saab">MXN</option>
                            <option value="mercedes">CAD</option>
                            <option value="audi">JPY</option>
                        </select>
                    </div>
                    <div id="currinput">
                    <label for="cars">Choose a currency:</label>
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
                    <input type="text" tag="curr1">
                    <input type="text" tag="curr1">
                    <p>value goes here</p>
                </div>
        
            </div>
        </div>
        

    );
}

export default Home;