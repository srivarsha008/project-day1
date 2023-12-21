import React, { useState, useEffect } from 'react';
import './Contact.css';

export const Contact = () => {
  useEffect(() => {
    document.body.classList.add('Contact-page');

    return () => {
      document.body.classList.remove('Contact-page');
    };
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('userName') || '';
    const storedEmail = localStorage.getItem('userEmail') || '';
    const storedPhoneNumber = localStorage.getItem('userPhoneNumber') || '';

    setName(storedName);
    setEmail(storedEmail);
    setPhoneNumber(storedPhoneNumber);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userPhoneNumber', phoneNumber);
    window.location.reload();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h1 className='contact'>Contact <span>US</span> </h1>
        <label>Name:</label>
        <input type='text' name='user_name' value={name} readOnly />

        <label>Email:</label>
        <input type='text' name='user_email' value={email} readOnly />

        <label>Phone Number:</label>
        <input
          type='tel'
          name='user_phone'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label>Message:</label>
        <textarea rows='3' name='message'></textarea>

        <input className='submit' type='submit' />
      </form>
    </div>
  );
};
