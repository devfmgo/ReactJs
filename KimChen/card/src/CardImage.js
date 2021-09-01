import React from "react";

const CardImage = ({ image, name, job }) => {
  return (
    <div>
      <div className="card">
        <img src={image} alt="Avatar"/>
        <div className="container">
          <h4>
            <b>{name}</b>
          </h4>
          <p>{job}</p>
        </div>
      </div>
    </div>
  );
};

export default CardImage;
