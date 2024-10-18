import { useState } from 'react';
import api from '../api'
import { useNavigate } from 'react-router-dom';


function Form(){
// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password1, setPassword1] = useState('');
const [password2, setPassword2] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
const navigate = useNavigate()

// Handling the name change
const handleName = (e) => {
setName(e.target.value);
setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword1 = (e) => {
setPassword1(e.target.value);
setSubmitted(false);
};

const handlePassword2 = (e) => {
    setPassword2(e.target.value);
    setSubmitted(false);
    };



// Handling the form submission
const handleSubmit = async (e) => {
e.preventDefault();
if (name === '' || password1 === '' || password2 === '') {
setError(true);
    } else {

    try{
        const response = await api.post('/rest-auth/registration/',{
            'username': name,
            'password1': password1,
            'password2': password2,
        },{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response.status)
        if (response.status >= 200 && response.status < 300){
            navigate('/')
    }
    }catch(error){
            console.log(error)
            setError(true);
    }
}
}

// Showing success message
const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<h1>User {name} successfully registered!!</h1>
</div>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1>Please enter all the fields</h1>
</div>
);
};

return (
<div className="form">
<div>
<h1>User Registration</h1>
</div>

{/* Calling to the methods */}
<div className="messages">
{errorMessage()}
{successMessage()}
</div>

<form>
{/* Labels and inputs for form data */}
<label className="label">Name</label>
<input onChange={handleName} className="input"
value={name} type="text" />

<label className="label">Email</label>
<input onChange={handleEmail} className="input"
value={email} type="email" />

<label className="label">Password</label>
<input onChange={handlePassword1} className="input"
value={password1} type="password" />

<label className="label">Confirm Password</label>
<input onChange={handlePassword2} className="input"
value={password2} type="password" />

<button onClick={handleSubmit} className="btn" type="submit">
Submit
</button>
</form>
</div>
);
}
export default Form;