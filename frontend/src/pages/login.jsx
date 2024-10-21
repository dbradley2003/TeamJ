import { useState } from 'react';
import api from '../api'
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import "../style/login.css"
    
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
      
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
          <div className="container d-flex justify-content-center align-items-center">
            <div className="form bg-blue-900 rounded-lg shadow-lg px-8 py-5 w-100 max-w-2xl">
              <div className="mb-4 text-center">
                <h1 className="text-4xl font-bold text-yellow-400">LOGIN</h1>
              </div>
      
              <form onSubmit={handleSubmit}>
                {/* Username Input */}
                <div className="form-group mb-3">
                  <label htmlFor="username" className="form-label font-semibold">
                    Username
                  </label>
                  <input
                    onChange={handleName}
                    value={username}
                    type="text"
                    className={`form-control ${error && !username ? 'is-invalid' : ''}`}
                    id="username"
                    placeholder="Enter username"
                  />
                  {error && !username && (
                    <div className="invalid-feedback">Username is required</div>
                  )}
                </div>
      
                {/* Password Input */}
                <div className="form-group mb-4">
                  <label htmlFor="password" className="form-label font-semibold">
                    Password
                  </label>
                  <input
                    onChange={handlePassword}
                    value={password}
                    type="password"
                    className={`form-control ${error && !password ? 'is-invalid' : ''}`}
                    id="password"
                    placeholder="Enter password"
                  />
                  {error && !password && (
                    <div className="invalid-feedback">Password is required</div>
                  )}
                </div>
      
                {/* Submit Button */}
                <div className="d-grid">
                  <button type="submit" className="btn bg-yellow-400 text-blue-900 font-semibold hover:bg-yellow-500">
                    <p className="size-50px" >Submit</p>
                  </button>
                </div>
      
                {/* Error Message */}
                {error && username !== '' && password !== '' && (
                  <div className="alert alert-danger mt-3" role="alert">
                    Invalid username or password. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
    );
    }
    export default Login;