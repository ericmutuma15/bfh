import React from 'react';
import IMG from '../assets/hosp.jpeg';

const Dental = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Dental Services</h1>
      <img src={IMG} alt="Dental Services" className="w-full h-auto rounded-lg shadow-md mb-4" />
      <p className="mb-4">Our dental services are designed to provide comprehensive oral care. From routine check-ups to advanced procedures, we ensure your dental health is in excellent hands.</p>
      <p className="mb-4">We also focus on educating our patients about maintaining good oral hygiene for long-term benefits.</p>
      <section className="mt-8">
        <img src={IMG} alt="Dental Project" className="w-full h-auto rounded-lg shadow-md mb-4" />
      </section>
    </div>
  );
};

export default Dental;