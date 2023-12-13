import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

const SignupPage = () => {
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [error, setError] = useState('');

 const navigate = useNavigate();

 const handleSignup = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('Please enter all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!document.getElementById('termsCheckbox').checked) {
      setError('Please agree to the Terms & Conditions');
      return;
    }

    setError('');
    navigate('/');
 };

 return (
    <div className="signup-container">
      <center>
        <h2>SIGN UP</h2>
      </center>
      <div className="input-group">
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <p>
        <input type="checkbox" id="termsCheckbox" className='check' />
        <span>I read and agree to</span>
        <span>
          <a href="#.com" className="link">{' '}
            Terms & Condition
          </a>
        </span>
      </p>
      <center>
        <button className="bt1" onClick={handleSignup}>
          Create Account
        </button>
      </center>
      <center>
        <p className="acc">
          Already have an account? <Link to="/" className='butt'>Sign in</Link>
        </p>
      </center>
    </div>
 );
};

export default SignupPage;