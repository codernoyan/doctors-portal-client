import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const ServiceCards = () => {
  const serviceData = [
    {
      id: 1,
      title: 'Fluoride Treatment',
      description: 'Patient can checkup their their teeth and if there is any cavity problem in teeth, then repair it quickly.',
      icon: fluoride
    },
    {
      id: 2,
      title: 'Cavity Filling',
      description: 'Patient can checkup their their teeth and if there is any cavity problem in teeth, then fill it quickly.',
      icon: cavity
    },
    {
      id: 3,
      title: 'Teeth Whitening',
      description: 'Patient can checkup their their teeth and if there is any dark problem in teeth, then repair it quickly.',
      icon: whitening
    },
  ]
  return (
    <>
      <div className="text-center mt-28 mb-20 space-y-2">
        <h4 className="uppercase text-xl text-secondary font-bold">Our Services</h4>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {
          serviceData.map(service => <ServiceCard
            key={service.id}
            service={service}
          ></ServiceCard>)
        }
      </div>
    </>
  );
};

export default ServiceCards;