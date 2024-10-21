import "../style/home.css";
import api from "../api";
import { useNavigate } from 'react-router-dom';
import Asset from '../components/asset';
import { useState, useEffect } from "react";
import "../style/assets.css"
function Portfolio() {

    const navigate = useNavigate();
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        fetchAssets();  // Fetch assets on page load
    }, []);

    useEffect(() => {
        console.log(assets);  // Log updated assets
    }, [assets]);  // Log whenever assets is updated

    const fetchAssets = async () => {
        try {
            const response = await api.get('/api/assetview/');
            console.log(response.data);
            setAssets(response.data);  // Set assets correctly with response.data
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mx-auto my-4 p-4"> {/* Tailwind Container */}
        <h1 className="port-title text-center">My Assets</h1>  {/* Improved title */}
        <hr className="title-divider my-4 "/> {/* Divider */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">  {/* Responsive grid layout */}
            {assets.length > 0 ? (
                assets.map(asset => (
                    <div key={asset.id} className="asset-card p-6">  {/* Tailwind card-like design */}
                        <Asset asset={asset} />
                    </div>
                ))
            ) : (
                <p className="no-assets-message text-center col-span-full">No assets found</p> 
            )}
        </div>
    </div>
    );
}

export default Portfolio;
