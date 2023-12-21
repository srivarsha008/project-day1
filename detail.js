import React from 'react';
import { useNavigate } from 'react-router-dom';
import './detail.css';

const Detail = () => {
  const navigate = useNavigate();

  const groceryItems = [
    { id: 1, name: 'Boat House', rate: 2.99, image: 'https://lh5.googleusercontent.com/p/AF1QipNVl4GmhoeBkLw9kVXLPL1ddYrLh6WUNKKo96Uw=w243-h174-n-k-no-nu' },
    { id: 2, name: 'St. Stephen s Church, Ooty', rate: 1.99, image: 'https://lh3.googleusercontent.com/p/AF1QipOi2hEie-krm-HDwXFrxGn7rycPNKM74jFRFsl-=s1360-w1360-h1020' },
    { id: 3, name: 'Rose garden', rate: 0.99, image: 'https://www.hoteldekho.com/storage/img/tourattraction/1650630118Government%20Rose%20Garden%20in%20Ooty.jpg' },
    { id: 4, name: 'Government Botanical Garden', rate: 2.99, image: 'https://lh3.googleusercontent.com/p/AF1QipNeqHIesl8548Od80f3BvN-0DUsl_L9VbPlyk5P=s1360-w1360-h1020' },
    { id: 5, name: 'Elk Hill Murugan Temple', rate: 1.99, image: 'https://www.trawell.in/admin/images/upload/728877799ELk_hill_murugan_Temple.jpg' },
    { id: 6, name: 'Mudumalai Tiger Reserve', rate: 0.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxfcq0lc_QgVy9NSRIe-bpYMktxIq6skC_0Q&usqp=CAU' },
  ];

  const renderGroceryCards = () => {
    return groceryItems.map((item) => (
      <div key={item.id} className="grocery-card">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>Rate: ${item.rate.toFixed(2)}</p>
        <button className="explore-btn">Select</button>
      </div>
    ));
  };

  const handleBackButtonClick = () => {
    navigate('/plans');
  };

  return (
    <div className="grocery-page">
      <h2>Start Purchasing</h2>
      <div className="grocery-container">{renderGroceryCards()}</div>
      <div className='buttonn'>
        <button onClick={handleBackButtonClick}>Back</button>
      </div>
    </div>
  );
};

export default Detail;
