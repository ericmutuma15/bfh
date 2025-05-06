import React from 'react';
import IMG from '../assets/hosp.jpeg';

const HealthConsultation = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Health Consultation</h1>
      <img src={IMG} alt="Health Consultation" className="w-full h-auto rounded-lg shadow-md mb-4" />
      <p className="mb-4">We offer consultations, lab tests, and x-ray services using our mobile X-ray machine. Our team of experienced professionals ensures you receive the best care possible.</p>
      <p className="mb-4">Our mission is to bring healing, hope, and practical skills to communities through Christ-led healthcare and training.</p>
      <section className="mt-8">
        <img src={IMG} alt="Health Consultation Project" className="w-full h-auto rounded-lg shadow-md mb-4" />
      </section>
    </div>
  );
};

export default HealthConsultation;