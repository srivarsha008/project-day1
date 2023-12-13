import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const LoginPage = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');

 const navigate = useNavigate();

 const handleLogin = () => {
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    setError('');
    navigate('/');
 };

 const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
 };

 return (
    <div className="login-container">
      <center>
        <h2>SIGN IN</h2>
      </center>
      <div className="input-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <div className="error-message">{error}</div>}
        <p className='divq'>
          <Link to="/forgot-password" className='fp' onClick={handleForgotPassword}>
            Forgot Password?
          </Link>
        </p>
      <center>
        <button className='log1' onClick={handleLogin}>Login</button>
      </center>
      
      <center>
        <p className='dive'>
          Don't have an account? <Link to="/signup" className='si'>Sign up</Link>
        </p>
      </center>
    </div>
 );
};

export default LoginPage;