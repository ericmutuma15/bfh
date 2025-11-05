// src/components/Courses.jsx
import React from "react";
import { Download } from "lucide-react";
import brochureImage from "../assets/rhyme_brochure.jpeg";

// Existing course images
import img1 from "../assets/hiv.jpeg";
import img2 from "../assets/nutrition.jpeg";
import img3 from "../assets/community.jpeg";
import img4 from "../assets/dental0.jpeg";
import img5 from "../assets/business.jpeg";
import img6 from "../assets/computer.jpeg";
import img7 from "../assets/plumbing.jpeg";
import img8 from "../assets/firstaid0.jpeg";
import img9 from "../assets/foodbev.jpeg";
import img10 from "../assets/environment.jpeg";
import img11 from "../assets/theology.jpeg";
import img12 from "../assets/dnc.avif";
import img13 from "../assets/ut.jpg";
import img14 from "../assets/xray.avif";

import sImg1 from "../assets/hivcert.jpeg";
import sImg2 from "../assets/packages.jpeg";
import sImg3 from "../assets/care.jpeg";
import sImg4 from "../assets/bible.jpeg";
import sImg5 from "../assets/signlang.jpeg";

import nImg1 from "../assets/ddn.jpeg";
import nImg2 from "../assets/ddc.jpeg";
import nImg3 from "../assets/dus.jpeg";
import nImg4 from "../assets/dxr.jpeg";

const diplomaCourses = [
  { title: "Community Health & HIV/AIDS Management", image: img1 },
  { title: "Nutrition & Dietetics", image: img2 },
  { title: "Community Health & Development", image: img3 },
  { title: "Dental Assistant Technology", image: img4 },
  { title: "Dental Nursing Certificate", image: img12 },
  { title: "Ultrasound Technology", image: img13 },
  { title: "X-Ray Technology", image: img14 },
  { title: "Business Management", image: img5 },
  { title: "Computer Applications", image: img6 },
  { title: "Water Technology & Plumbing", image: img7 },
  {
    title: "First Aid, Home Based Care & Drug Addiction Intervention",
    image: img8,
  },
  { title: "Food & Beverage", image: img9 },
  { title: "Environment, Climate Change & Health", image: img10 },
  { title: "Bible Studies and Theology", image: img11 },
];

const shortCourses = [
  { title: "Certificate in HIV & HIV Counselling & Testing", image: sImg1 },
  { title: "Computer Packages", image: sImg2 },
  {
    title: "Home Management & Basic Care Giving (Basic Literacy)",
    image: sImg3,
  },
  { title: "Theology & Biblical Studies", image: sImg4 },
  { title: "Kenyan Sign Language", image: sImg5 },
];

const newCourses = [
  {
    title: "Diploma in Dental Nursing",
    description:
      "Tailored for practicing or qualified nurses seeking to specialize in dental care.",
    image: nImg1,
  },
  {
    title: "Certificate in Chairside Dental Assisting",
    description:
      "Equips learners with practical skills to assist dental professionals effectively.",
    image: nImg2,
  },
  {
    title: "Certificate in Ultrasound Technology",
    description:
      "Hands-on course ideal for those interested in diagnostic imaging using ultrasound.",
    image: nImg3,
  },
  {
    title: "Certificate in Emergency X-ray Technology",
    description:
      "Trains professionals in conducting X-ray imaging in emergency and clinical settings.",
    image: nImg4,
  },
];

const Courses = () => (
  <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4">
    <div className="max-w-4xl mx-auto">
      {/* Download Brochure */}
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
          href="https://rhymeinstitute.vercel.app/" // Replace with your actual website URL
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold text-lg px-6 py-3 rounded-2xl shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-teal-600 hover:to-green-500 transition-transform duration-200 border-2 border-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14m-7 7h7a2 2 0 002-2v-7" /></svg>
          Visit Website
        </a>
      </div>

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Our Courses
      </h1>

      {/* New Courses Now Offered */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          New Courses Now Offered
        </h2>
        <p className="mb-6 text-gray-700">
          We are excited to announce four new specialized courses to meet
          evolving healthcare needs. These are open for enrollment across all
          our centers, including Meru County and Mombasa.
        </p>
        <ul className="grid md:grid-cols-2 gap-6">
          {newCourses.map(({ title, description, image }) => (
            <li
              key={title}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex-1">
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Diploma & Certificate */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">
          Health, Vocational & Development Courses
        </h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {diplomaCourses.map(({ title, image }) => (
            <li
              key={title}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Short Courses */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">
          Short Courses
        </h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {shortCourses.map(({ title, image }) => (
            <li
              key={title}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Download Brochure Again */}
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
          href="https://rhymeinstitute.vercel.app/" // Replace with your actual website URL
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold text-lg px-6 py-3 rounded-2xl shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-teal-600 hover:to-green-500 transition-transform duration-200 border-2 border-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14m-7 7h7a2 2 0 002-2v-7" /></svg>
          Visit Website
        </a>
      </div>
    </div>
  </div>
);

export default Courses;
