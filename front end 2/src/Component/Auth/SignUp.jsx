import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

function SignUp(props) {
    const { register } = useAuth();
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(data);
            navigate("/signin");
            // Redirect to a login or protected route

        } catch (error) {
            console.error('Registration failed:', error.response.data.msg);
        }
    };
    return (
        <div className='container'>
        <div className='row mt-5'>
          <div className='col-4 offset-4 shadow'>
            <form onSubmit={handleSubmit}>
              <div className='m-2'>
                <label className='form-label'>Name</label>
                <input type="text" onChange={(e)=>setData({...data, name:e.target.value})} className='form-control' id="txt_name"/>
              </div>
              <div className='m-2'>
                <label className='form-label'>Email</label>
                <input type="email" onChange={(e)=>setData({...data, email:e.target.value})} className='form-control' id="txt_email"/>
              </div>
              <div className='m-2'>
                <label className='form-label'>Mobile</label>
                <input type="number" onChange={(e)=>setData({...data, mobile:e.target.value})} className='form-control' id="txt_mobile"/>
              </div>
              <div className='m-2'>
                <label className='form-label'>Password</label>
                <input type="text" onChange={(e)=>setData({...data, password:e.target.value})} className='form-control' id="txt_password"/>
              </div>
              <div className='m-2'>
                <label className='form-label'>Confirm Password</label>
                <input type="text" onChange={(e)=>setData({...data, confirm:e.target.value})} className='form-control' id="txt_"/>
              </div>
              <div className='m-2 mt-4'>
                <input type="submit" className='btn btn-primary form-control' id="txt_confirm"/>
              </div>

            </form>
            <label>Have account instead <Link to="/signin">Login</Link> </label>
          </div>
        </div>
     </div>
    );
}

export default SignUp;