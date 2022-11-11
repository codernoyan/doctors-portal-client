import React from 'react';

const ServiceCard = ({ service }) => {
  const {title, description, icon} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl text-center">
         <figure><img src={icon} alt="Movie" /></figure>
      <div className="card-body">
        <h2 className="text-xl font-medium text-center">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;