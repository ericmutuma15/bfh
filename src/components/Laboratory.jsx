import React from 'react';
import laboratoryImage from '../assets/lab.jpeg'; // Assuming you have a laboratory image in your assets folder

const Laboratory = () => {
  return (
    <div className="section">
      <h1 className="section-title">Laboratory Services</h1>
      <img src={laboratoryImage} alt="Laboratory Services" className="w-full h-auto rounded-lg shadow-md mb-4" />
      <p className="section-content mb-4">Our state-of-the-art medical laboratory provides accurate and timely diagnostic services to support clinical decisions.</p>
      <ul className="section-content mb-4 list-disc list-inside">
        <li>Routine and specialized lab tests</li>
        <li>Blood work and analysis</li>
        <li>Microbiology and pathology tests</li>
        <li><span className="font-semibold text-blue-700">Ultrasound (as a special feature)</span></li>
        <li>X-ray services</li>
      </ul>
      <div className="section-content mb-2">
        <span className="font-semibold">Features:</span>
        <ul className="list-disc list-inside ml-4">
          <li>Certified lab technicians</li>
          <li>Fast turnaround time</li>
          <li>Integrated with patient records for efficient results delivery</li>
        </ul>
      </div>
    </div>
  );
};

export default Laboratory;