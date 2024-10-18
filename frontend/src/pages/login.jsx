import { useState } from 'react';
import api from '../api'
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';

    
function Login(){
    
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');


const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
const navigate = useNavigate()


const handleName = (e) => {
    setUsername(e.target.value);
    
    };

const handlePassword = (e) => {
    setPassword(e.target.value);
        };   

const handleSubmit = async (e) => {
e.preventDefault();
if (username === '' || password === '') {
setError(true);
    } else {

    try{
        const response = await api.post('/api/token/',{
            'username': username,
            'password': password
          
        },{
            headers: {
                'Content-Type': 'application/json'
            }
        })
       
        if (response.status === 200){
        const access_token = response.data.access
        const refresh_token = response.data.refresh
        localStorage.setItem(ACCESS_TOKEN, access_token);
        localStorage.setItem(REFRESH_TOKEN, refresh_token);
        navigate('/home')
        const newToken = localStorage.getItem(ACCESS_TOKEN)
        console.log("Access token stored:",newToken );
        // console.log(localStorage.getItem('ACCESS_TOKEN'));
    }
    }catch(error){
            console.log(error)
            setError(true);
    }
}
}
    
    
    return (
    <div className="form">
    <div>
    <h1>Login</h1>
    </div>

    
    <form>
    {/* Labels and inputs for form data */}
    <label className="label">Username</label>
    <input onChange={handleName} className="input"
    value={username} type="text" />
      
    
    <label className="label">Password</label>
    <input onChange={handlePassword} className="input"
    value={password} type="password" />
    
    <button onClick={handleSubmit} className="btn" type="submit">
    Submit
    </button>
    </form>
    </div>
    );
    }
    export default Login;