import React from 'react';
import IMG from '../assets/hosp.jpeg';

const Laboratory = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Laboratory Services</h1>
      <img src={IMG} alt="Laboratory Services" className="w-full h-auto rounded-lg shadow-md mb-4" />
      <p className="mb-4">Our laboratory is equipped with state-of-the-art technology to provide accurate and timely diagnostic services. From blood tests to advanced imaging, we cover a wide range of diagnostic needs.</p>
      <p className="mb-4">We are committed to maintaining the highest standards of quality and reliability in all our services.</p>
      <section className="mt-8">
        <img src={IMG} alt="Laboratory Project" className="w-full h-auto rounded-lg shadow-md mb-4" />
      </section>
    </div>
  );
};

export default Laboratory;