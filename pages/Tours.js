
import React from 'react';
import Card from '../Card';

function Tours({ tours, removeTour }) {
  return (
    <div id="tours" className='container'>
      <div>
      </div>
      <div className='cards'>
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
