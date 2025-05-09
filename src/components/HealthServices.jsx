// components/HealthServices.jsx

import React from 'react';
import Laboratory from './Laboratory';
import Dental from './Dental';
import WardTheatre from './WardTheatre';
import { Download } from 'lucide-react'; 
import brochureImage from '../assets/bfh_brochure.jpeg';

const HealthServices = () => {
  return (
    <div className="p-6">
      <div className="mb-8 flex justify-center">
        <a
          href={brochureImage}
          download
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200"
        >
          <Download className="w-5 h-5" />
          Download Brochure
        </a>
      </div>

      <Laboratory />
      <Dental />
      <WardTheatre />
    </div>
  );
};

export default HealthServices;
