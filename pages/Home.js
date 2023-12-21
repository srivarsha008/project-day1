// Home.js
import React from 'react';
import './Home.css';
import home from '../Videos/home.mp4';
import Header from '../Homepage/Header';

const Home = () => {
  return (
    <div className="home">
    
      <Header />
      <video className='videoTag' autoPlay muted loop>
        <source src={home} type="video/mp4" />
      </video>
      <div className="overlay"></div>
    </div>
  );
};

export default Home;