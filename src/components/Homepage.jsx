import React, { useState } from "react";
import IMG from "../assets/hosp.jpeg";
import campImage from "../assets/camp.jpeg";
import hydroponicsImage from "../assets/food0.jpeg";
import trainingImage from "../assets/sch0.png";
import clinicImage from "../assets/clinic.jpeg";
import Appointments from "./Appointments";

const Homepage = () => {
  const [showAppointment, setShowAppointment] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {showAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg relative max-w-lg w-full">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setShowAppointment(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <Appointments />
          </div>
        </div>
      )}
      <main className="max-w-4xl mx-auto px-4">
        <section className="hero mt-8 flex flex-col md:flex-row items-center justify-between gap-8 py-8 px-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl shadow-lg mb-8">
          <div className="flex-1 text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Welcome to Brook of Healing Centre
            </h1>
            <p className="mb-4 text-lg text-gray-700">
              A Christ-centered healing initiative based in Kenya, dedicated to health, education, and empowerment.
            </p>
            <ul className="mb-4 list-disc pl-6 text-gray-700">
              <li>Medical camps for the needy and people with disabilities</li>
              <li>A faith-based health training school</li>
              <li>Sustainable food projects like hydroponics for arid regions</li>
            </ul>
            <blockquote className="italic text-blue-800 mb-4">
              “Where there is no vision, the people perish.” – Proverbs 29:18
            </blockquote>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">About Us</h2>
              <p className="mb-2">
                <strong>Our Story:</strong> Brook of Healing Centre began as a personal calling to serve both body and soul. Founded by a saved Christian woman, divorced and a mother of two, who overcame life’s trials with faith and resilience, the Centre now serves as a light to others.
              </p>
              <p className="mb-2">
                <strong>Our Mission:</strong> To bring healing, hope, and practical skills to communities through Christ-led healthcare and training.
              </p>
              <p className="mb-2">
                <strong>Our Vision:</strong> A thriving generation, spiritually and physically empowered, especially the disadvantaged.
              </p>
              <p className="mb-2">
                <strong>Our Values:</strong> Faith & Compassion, Integrity in Service, Dignity for All, Empowerment through Knowledge
              </p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">We have incorporated:</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>
                  <strong>BRITISH FAMILY HOSPITAL</strong> – Our registered hospital serving the community.
                  <button
                    className="ml-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 font-semibold text-sm"
                    onClick={() => window.open("https://britishfamilyhospital.co.ke", "_blank")}
                  >
                    Visit Website
                  </button>
                </li>
                <li>
                  <strong>RHYME TRAINING INSTITUTE</strong> – Our accredited training institute for health and empowerment.
                </li>
              </ul>
              
            </div>
            <div className="flex gap-4 mt-6">
              <button className="cta-btn" onClick={() => setShowAppointment(true)}>
                Book an Appointment
              </button>
              <button className="cta-btn bg-green-600 hover:bg-green-700">
                Consult a Doctor
              </button>
            </div>
            <div className="mt-2 text-gray-700 text-sm">Book your appointment with us today for quality, Christ-centered care.</div>
          </div>
          <img src={IMG} alt="Hospital" className="hero-img" />
        </section>
        <section className="section">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-content">
            To bring healing, hope, and practical skills to communities through
            Christ-led healthcare and training.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">Our Vision</h2>
          <p className="section-content">
            A thriving generation, spiritually and physically empowered,
            especially the disadvantaged.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-content">
            Address: Kanyi apts, Kenya Israel, Machakos.
          </p>
          <p className="section-content">Phone: +254 113 678 958</p>
          <p className="section-content">Email: healingbrookmgd@gmail.com</p>
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
              <span className="font-semibold mb-2">
                Christian Health Training School
              </span>
              <span>
                We train young people in healthcare with practical exposure in
                our own clinic. We aim to equip 100 students every year in
                nursing, lab, and community health.
              </span>
              <img
                src={trainingImage}
                alt="Christian Health Training School"
                className="w-full h-auto rounded-lg shadow-md mt-4"
              />
            </li>
            <li className="shadow-lg rounded-xl bg-white text-black p-4 flex flex-col">
              <span className="font-semibold mb-2">Medical Camps</span>
              <span>
                Regular outreach programs provide free services to rural areas,
                with special focus on the disabled and mental health. The next
                camp is on April 26, 2025.
              </span>
              <img
                src={campImage}
                alt="Medical Camps"
                className="w-full h-auto rounded-lg shadow-md mt-4"
              />
            </li>
            <li className="shadow-lg rounded-xl bg-white text-black p-4 flex flex-col">
              <span className="font-semibold mb-2">
                Hydroponics & Food Security
              </span>
              <span>
                A pilot farm provides fresh produce and showcases how older
                people in dry areas can grow food using less water and space.
              </span>
              <img
                src={hydroponicsImage}
                alt="Hydroponics & Food Security"
                className="w-full h-auto rounded-lg shadow-md mt-4"
              />
            </li>
            <li className="shadow-lg rounded-xl bg-white text-black p-4 flex flex-col">
              <span className="font-semibold mb-2">Clinic Services</span>
              <span>
                We offer consultations, lab tests, and x-ray services using our
                mobile X-ray machine.
              </span>
              <img
                src={clinicImage}
                alt="Clinic Services"
                className="w-full h-auto rounded-lg shadow-md mt-4"
              />
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
