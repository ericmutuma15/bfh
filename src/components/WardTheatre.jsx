import React from 'react';
import wardImage from '../assets/ward.jpeg'; // Assuming you have a ward image in your assets folder

const WardTheatre = () => {
  return (
    <div className="section">
      <h1 className="section-title">Inpatient Ward & Minor Theatre</h1>
      <img src={wardImage} alt="Inpatient Ward & Minor Theatre" className="w-full h-auto rounded-lg shadow-md mb-4" />
      <p className="section-content mb-4">We provide comfortable inpatient care with attentive nursing, minor surgical procedures, and round-the-clock monitoring.</p>
      <ul className="section-content mb-4 list-disc list-inside">
        <li>Minor theatre procedures</li>
        <li>Emergency care services</li>
        <li>Observation wards for short stays</li>
        <li>Inpatient triaging & management</li>
      </ul>
      <div className="section-content mb-2">
        <span className="font-semibold">Features:</span>
        <ul className="list-disc list-inside ml-4">
          <li>Clean, well-equipped wards</li>
          <li>Patient-centered care</li>
          <li>Access to emergency medical support</li>
        </ul>
      </div>
    </div>
  );
};

export default WardTheatre;