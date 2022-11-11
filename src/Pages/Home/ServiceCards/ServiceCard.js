import React from 'react';

const ServiceCard = ({ service }) => {
  const {title, description, icon} = service;
  return (
    <div className="card bg-base-100 shadow-xl text-center">
         <figure><img className="pt-8" src={icon} alt="Movie" /></figure>
      <div className="card-body">
        <h2 className="text-xl font-medium text-center">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;