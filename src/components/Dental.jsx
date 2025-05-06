import React from 'react';
import dentalImage from '../assets/dental.jpeg'; 

const Dental = () => {
  return (
    <div className="section">
      <h1 className="section-title">Dental Services</h1>
      <img src={dentalImage} alt="Dental Services" className="w-full h-auto rounded-lg shadow-md mb-4" />
      <p className="section-content mb-4">Our dental unit offers professional and affordable oral health care with a focus on preventive, restorative, and cosmetic dentistry.</p>
      <ul className="section-content mb-4 list-disc list-inside">
        <li>Dental consultations</li>
        <li><span className="font-semibold text-blue-700">Dental braces (special feature)</span></li>
        <li>Teeth cleaning & whitening</li>
        <li>Minor oral surgery (e.g. extractions)</li>
        <li>Emergency dental care</li>
      </ul>
      <div className="section-content mb-2">
        <span className="font-semibold">Features:</span>
        <ul className="list-disc list-inside ml-4">
          <li>Modern dental equipment</li>
          <li>Skilled dental surgeons</li>
          <li>Walk-in consultations available</li>
          <li>24/7 service availability</li>
        </ul>
      </div>
    </div>
  );
};

export default Dental;