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
      <div className="mb-8 flex flex-col md:flex-row justify-center gap-4">
        <a
          href={brochureImage}
          download
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200"
        >
          <Download className="w-5 h-5" />
          Download Brochure
        </a>
        <a
          href="https://bfhosp.vercel.app/" // Replace with your actual website URL
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold text-lg px-6 py-3 rounded-2xl shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-teal-600 hover:to-green-500 transition-transform duration-200 border-2 border-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14m-7 7h7a2 2 0 002-2v-7" /></svg>
          Visit Website
        </a>
      </div>

      <Laboratory />
      <Dental />
      <WardTheatre />
      <div className="mb-8 flex flex-col md:flex-row justify-center gap-4">
        <a
          href={brochureImage}
          download
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200"
        >
          <Download className="w-5 h-5" />
          Download Brochure
        </a>
        <a
          href="https://bfhosp.vercel.app/" // Replace with your actual website URL
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold text-lg px-6 py-3 rounded-2xl shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-teal-600 hover:to-green-500 transition-transform duration-200 border-2 border-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14m-7 7h7a2 2 0 002-2v-7" /></svg>
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default HealthServices;
