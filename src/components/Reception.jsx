import React from 'react';

const Reception = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-4">Our hospital is dedicated to providing exceptional healthcare services with compassion and care.</p>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Our Story</h2>
        <p className="mt-4">Brook of Healing Centre began as a personal calling to serve both body and soul. Founded by a saved Christian woman, divorced and a mother of two, who overcame life’s trials with faith and resilience, the Centre now serves as a light to others.</p>
      </section>
      <h2 className="text-2xl font-semibold mt-8">Contact Information</h2>
      <p className="mt-2">Phone: (123) 456-7890</p>
      <p>Email: contact@hospital.com</p>
      <h2 className="text-2xl font-semibold mt-8">Operating Hours</h2>
      <p className="mt-2">Monday - Friday: 8:00 AM - 8:00 PM</p>
      <p>Saturday - Sunday: 9:00 AM - 5:00 PM</p>
      <section className="mt-8">
        <img src={IMG} alt="Reception Project" className="w-full h-auto rounded-lg shadow-md mb-4" />
      </section>
    </div>
  );
};

export default Reception;