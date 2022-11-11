import React from 'react';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import InfoCards from '../InfoCards/InfoCards';
import ServiceCards from '../ServiceCards/ServiceCards';

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <ServiceCards></ServiceCards>
      <DentalCare></DentalCare>
    </div>
  );
};

export default Home;