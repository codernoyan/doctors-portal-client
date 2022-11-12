import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

  const reviewsData = [
    {
      _id: 1,
      name: 'Henson Herry',
      img: people1,
      reviewInfo: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      location: 'California'
    },
    {
      _id: 2,
      name: 'Henson Herry',
      img: people2,
      reviewInfo: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      location: 'California'
    },
    {
      _id: 3,
      name: 'Henson Herry',
      img: people3,
      reviewInfo: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      location: 'California'
    },
  ]

  return (
    <section className="mt-16">
      <div className="flex justify-between items-center">
        <div>
            <h4 className="text-xl text-secondary font-bold">Testimonial</h4>
            <h2 className='text-4xl'>What Our Patients Says</h2>
        </div>
        <figure>
          <img className="w-24 lg:w-48" src={quote} alt="quote" />
        </figure>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          reviewsData.map(review => <Review
            key={review._id}
            review={review}
          ></Review>)
        }
      </div>
    </section>
  );
};

export default Testimonial;