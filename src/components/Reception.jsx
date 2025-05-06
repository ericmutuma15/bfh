import React from 'react';
import aboutImage from '../assets/about.jpeg'; // Assuming you have an about image in your assets folder

const AboutUs = () => {
  return (
    <div className="section">
      <h1 className="section-title">About Us</h1>
      <img src={aboutImage} alt="About Us" className="w-full h-auto rounded-lg shadow-md mb-4" />
      <p className="section-content mt-4">Our hospital is dedicated to providing exceptional healthcare services with compassion and care.</p>
      <section className="mt-8">
        <h2 className="section-title">Our Story</h2>
        <p className="section-content mt-4">Brook of Healing Centre began as a personal calling to serve both body and soul. Founded by a saved Christian woman, divorced and a mother of two, who overcame life’s trials with faith and resilience, the Centre now serves as a light to others.</p>
      </section>
      <h2 className="section-title mt-8">Contact Information</h2>
      <p className="section-content mt-2">Phone: +254 113 678 958</p>
      <p className="section-content">Email: healingbrookmgd@gmail.com</p>
      <h2 className="section-title mt-8">Operating Hours</h2>
      <p className="section-content mt-2">Monday - Friday: 8:00 AM - 8:00 PM</p>
      <p className="section-content">Saturday - Sunday: 9:00 AM - 5:00 PM</p>
    </div>
  );
};

export default AboutUs;