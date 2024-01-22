import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";


const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:3000/employee/employee_login', values)
            .then((result) => {
                if (result.data.loginStatus) {
                    localStorage.setItem('valid', true);
                    navigate('/employee_detail/' + result.data.id);
                } else {
                    setError(result.data.Error);
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className='login-page'>
            <div className='header'>
                <img src={logo} className='logo' alt="Your Logo" />
                <div className="login-container">

                    <div className="wrappedButtons">
                        <div>
                            <button type="button" className="employeeButton" onClick={() => { navigate('/signup') }}>
                                Sign-up
                            </button>
                        </div>

                        <div>
                            <button type="button" className="adminButton" onClick={() => { navigate('/login') }}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='logo'>

            </div>
            <div className='p-3 rounded w-25 border loginForm text-center'>
                <div className='text-warning'>
                    {error && error}
                </div>

                <h2>LOGO</h2>
                <form onSubmit={handleSubmit}>
                    
                    <div className='mb-3'>
                
                        <input type="text" name='text' placeholder='Username'
                            onChange={(e) => setValues({ ...values, password: e.target.value })} className='form-control' />
                    </div>
                    <div className='mb-3'>
                
                        <input type="password" name='password' placeholder='Password'
                            onChange={(e) => setValues({ ...values, password: e.target.value })} className='form-control' />
                    </div>
                    
                    <button className='btn btn-success w-100 mb-2'>Login</button>
                  
                </form>
            </div>
        </div>
    );
};

export default Login;
