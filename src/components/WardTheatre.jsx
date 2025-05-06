import React from 'react';
import IMG from '../assets/hosp.jpeg';

const WardTheatre = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Ward & Theatre</h1>
      <img src={IMG} alt="Ward and Theatre" className="w-full h-auto rounded-lg shadow-md mb-4" />
      <p className="mb-4">Our wards and theatres are designed to provide a comfortable and safe environment for patients. With modern facilities and a dedicated team, we ensure the best care during your stay.</p>
      <p className="mb-4">We also offer specialized surgical services with a focus on patient safety and recovery.</p>
      <section className="mt-8">
        <img src={IMG} alt="Ward & Theatre Project" className="w-full h-auto rounded-lg shadow-md mb-4" />
      </section>
    </div>
  );
};

export default WardTheatre;