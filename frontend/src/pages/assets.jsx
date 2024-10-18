import "../style/home.css"
import api from "../api"
import { useNavigate } from 'react-router-dom';

function portfolio() {

    const navigate = useNavigate();

    useEffect(() => {
        fetchAssets;  // Show the modal on page load
    }, []);

    const fetchAssets = async () => {
            try{
                const response = await api.get('/api/assetview/')
                console.log(response.data)
               
               

            }catch(error){
                console.log(error)
            }
            
            };   



    return (
<div>
  
</div>
    )
}
    export default portfolio