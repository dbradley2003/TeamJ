import { useState } from 'react';
import api from '../api'
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN } from '../constants';
import "../style/home.css"

    
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
        const response = await api.post('/rest-auth/login/',{
            'username': username,
            'password': password
          
        },{
            headers: {
                'Content-Type': 'application/json'
            }
        })
       
        if (response.status === 200){
        const token = response.data.key
        localStorage.setItem(ACCESS_TOKEN, token);
        navigate('/home')
        console.log("Access token stored:", token);
    }
    }catch(error){
            console.log(error)
            setError(true);
    }
}
}
    
    
    return (
    <div className="form" class="background">
    <div>
    <h1 class = "title ">Login</h1>
    </div>

    
    <form>
    {/* Labels and inputs for form data */}
    <label class="labels" className="label">Username</label>
    <input onChange={handleName} className="input"
    value={username} type="text" />
      
    
    <label class="labels" className="label">Password</label>
    <input onChange={handlePassword} className="input"
    value={password} type="password" />
    
    <button class = "homebutton" onClick={handleSubmit} className="btn" type="submit">
    Submit
    </button>
    </form>
    </div>
    );
    }
    export default Login;