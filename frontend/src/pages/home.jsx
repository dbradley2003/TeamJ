
import "../style/home.css"
import api from "../api"
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const viewAssets = async () => {
        navigate('/assets')
    }



    return (
      
        <div className="min-h-screen bg-gray-50">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <title>Currency Exchanges</title>
  
        {/* Header with Navigation */}
        <header className="bg-blue-charcoal text-white py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-2xl md:text-4xl font-bold ">World Link Exchange</h1>
            <nav className="flex flex-wrap justify-center md:justify-end">
            <button className="home-button mx-3">Simulation</button>
            <button className="home-button mx-3">Tools</button>
            <button className="home-button mx-3" onClick={viewAssets}>Assets</button>
            </nav>
          </div>
        </header>
  
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="row">
            {/* Trader History Section */}
            <div className="col-md-6 mb-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-2xl font-semibold text-deep-koamaru mb-4">Trader History</h2>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@4.2.1/dist/chart.umd.min.js"></script>
                <canvas id="chart"></canvas>
              </div>
            </div>
  
            {/* Currency Converter Section */}
            <div className="col-md-6 mb-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-2xl font-semibold text-deep-koamaru mb-4">Currency Converter</h2>
                <div className="row mb-4">
                  <div className="col-8">
                    <label htmlFor="currency1" className="form-label">Choose a currency:</label>
                    <select id="currency1" className="form-select">
                      <option value="USD">USD</option>
                      <option value="MXN">MXN</option>
                      <option value="CAD">CAD</option>
                      <option value="JPY">JPY</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <label htmlFor="currency2" className="form-label">Choose a currency:</label>
                    <select id="currency2" className="form-select">
                      <option value="USD">USD</option>
                      <option value="MXN">MXN</option>
                      <option value="CAD">CAD</option>
                      <option value="JPY">JPY</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p className="mb-2">Exchange rate</p>
                    <p className="mb-2">How much curr1 for curr2?</p>
                    <input type="text" className="form-control mb-2" placeholder="Enter amount for currency 1" />
                    <input type="text" className="form-control mb-2" placeholder="Enter amount for currency 2" />
                    <p className="text-muted">Value goes here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
   
    );
}

export default Home;