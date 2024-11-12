// src/components/Auth/Login.js
import React, { useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate("/protected")
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className='container'>
        <div className='row mt-5'>
          <div className='col-4 offset-4 pb-3 shadow'>
            <form onSubmit={handleSubmit}>
              <div className='m-2'>
                <label className='form-label'>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} className='form-control' id="txt_email"/>
              </div>
              <div className='m-2'>
                <label className='form-label'>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} className='form-control' id="txt_password"/>
              </div>
              <div className='m-2 mt-4'>
                <button type="submit" className='btn btn-primary form-control'>Login</button>
              </div>
            </form>
            <label>Don't have account? <Link to="/signup">Signup</Link> </label>
          </div>
         
        </div>
     </div>
    );
};

export default SignIn;
