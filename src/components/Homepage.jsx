import React from 'react';
import { Link } from 'react-router-dom';
import IMG from '../assets/hosp.jpeg'; 
import logoImage from '../assets/Designer.png';
import campImage from '../assets/camp.jpeg';
import hydroponicsImage from '../assets/food0.jpeg';
import trainingImage from '../assets/sch0.png';
import clinicImage from '../assets/clinic.jpeg';
import DesignerLogo from '../assets/Designer.png';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="sticky top-0 z-50 bg-white shadow-md flex justify-center py-2">
        <div className="flex items-center space-x-4">
          <img src={DesignerLogo} alt="Logo" className="h-8 w-auto" />
          <span className="text-lg font-bold text-blue-800">Brook of Healing Centre</span>
        </div>
        <div className="flex-1 flex justify-center">
          <Link to="/reception" className="mx-3 text-base font-medium text-blue-700 hover:text-blue-900 transition-colors">Reception</Link>
          <Link to="/laboratory" className="mx-3 text-base font-medium text-blue-700 hover:text-blue-900 transition-colors">Laboratory</Link>
          <Link to="/dental" className="mx-3 text-base font-medium text-blue-700 hover:text-blue-900 transition-colors">Dental</Link>
          <Link to="/ward-theatre" className="mx-3 text-base font-medium text-blue-700 hover:text-blue-900 transition-colors">Ward & Theatre</Link>
          <Link to="/health-consultation" className="mx-3 text-base font-medium text-blue-700 hover:text-blue-900 transition-colors">Health Consultation</Link>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto px-4">
        <section className="hero mt-8 flex flex-col md:flex-row items-center justify-between gap-8 py-8 px-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl shadow-lg mb-8">
          <div className="flex-1 text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Welcome to Brook of Healing Centre</h1>
            <p className="mb-6 text-lg text-gray-700">A modern hospital dedicated to healing, hope, and practical skills for the community.</p>
            <div className="flex gap-4">
              <button className="cta-btn">Book an Appointment</button>
              <button className="cta-btn bg-green-600 hover:bg-green-700">Consult a Doctor</button>
            </div>
          </div>
          <img src={IMG} alt="Hospital" className="hero-img" />
        </section>
        <section className="section">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-content">To bring healing, hope, and practical skills to communities through Christ-led healthcare and training.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Our Vision</h2>
          <p className="section-content">A thriving generation, spiritually and physically empowered, especially the disadvantaged.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-content">Address: 123 Health St, Wellness City</p>
          <p className="section-content">Phone: +1 234 567 890</p>
          <p className="section-content">Email: contact@britishfamilyhospital.com</p>
        </section>
        <section className="section">
          <h2 className="section-title">Latest News</h2>
          <ul className="mt-4 list-disc list-inside">
            <li>New state-of-the-art X-Ray machine installed.</li>
            <li>Free health check-up camp on May 15, 2025.</li>
            <li>Partnership with Global Health Initiative announced.</li>
          </ul>
        </section>
        <section className="section">
          <h2 className="section-title">Programs</h2>
          <ul className="grid md:grid-cols-2 gap-6 mt-4">
            <li className="shadow-lg rounded-xl bg-white text-black p-4 flex flex-col">
              <span className="font-semibold mb-2">Christian Health Training School</span>
              <span>We train young people in healthcare with practical exposure in our own clinic. We aim to equip 100 students every year in nursing, lab, and community health.</span>
              <img src={trainingImage} alt="Christian Health Training School" className="w-full h-auto rounded-lg shadow-md mt-4" />
            </li>
            <li className="shadow-lg rounded-xl bg-white text-black p-4 flex flex-col">
              <span className="font-semibold mb-2">Medical Camps</span>
              <span>Regular outreach programs provide free services to rural areas, with special focus on the disabled and mental health. The next camp is on April 26, 2025.</span>
              <img src={campImage} alt="Medical Camps" className="w-full h-auto rounded-lg shadow-md mt-4" />
            </li>
            <li className="shadow-lg rounded-xl bg-white text-black p-4 flex flex-col">
              <span className="font-semibold mb-2">Hydroponics & Food Security</span>
              <span>A pilot farm provides fresh produce and showcases how older people in dry areas can grow food using less water and space.</span>
              <img src={hydroponicsImage} alt="Hydroponics & Food Security" className="w-full h-auto rounded-lg shadow-md mt-4" />
            </li>
            <li className="shadow-lg rounded-xl bg-white text-black p-4 flex flex-col">
              <span className="font-semibold mb-2">Clinic Services</span>
              <span>We offer consultations, lab tests, and x-ray services using our mobile X-ray machine.</span>
              <img src={clinicImage} alt="Clinic Services" className="w-full h-auto rounded-lg shadow-md mt-4" />
            </li>
          </ul>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-4 mt-8 text-center">
        <p>&copy; 2025 Brook of Healing Centre. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;