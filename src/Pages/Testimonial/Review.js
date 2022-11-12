import React from 'react';

const Review = ({ review }) => {
  const { name, img, reviewInfo, location } = review;
  return (
    <section className="card shadow-xl">
      <div className="card-body">
        <p>{reviewInfo}</p>
        <div className="flex gap-6 items-center mt-6">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="avatar" />
            </div>
          </div>
          <div>
            <h5 className="text-lg">{name}</h5>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;