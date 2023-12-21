import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card({ id, image, info, name, removeTour }) {
  const [readmore, setReadmore] = useState(false);

  const description = readmore ? info : `${info.substring(0, 200)}....`;

  const readmoreHandler = () => setReadmore(!readmore);

  return (
    <div className="card">
      <img src={image} className="image" alt="tb" />

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? "Show Less" : "Read More"}
          </span>
        </div>

        <Link to={id === 1 ? `/detail/${id}` : '#'} className="see-details-button">
          See Details
        </Link>
        {id !== 1}
      </div>
    </div>
  );
}

export default Card;
