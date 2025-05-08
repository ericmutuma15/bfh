// src/components/Courses.jsx
import React from "react";

// Import one image per course (swap these with your actual image files)
import img1  from "../assets/hiv.jpeg";
import img2  from "../assets/nutrition.jpeg";
import img3  from "../assets/community.jpeg";
import img4  from "../assets/dental0.jpeg";
import img5  from "../assets/business.jpeg";
import img6  from "../assets/computer.jpeg";
import img7  from "../assets/plumbing.jpeg";
import img8  from "../assets/firstaid0.jpeg";
import img9  from "../assets/foodbev.jpeg";
import img10 from "../assets/environment.jpeg";
import img11 from "../assets/theology.jpeg";

import sImg1 from "../assets/hivcert.jpeg";
import sImg2 from "../assets/packages.jpeg";
import sImg3 from "../assets/care.jpeg";
import sImg4 from "../assets/bible.jpeg";
import sImg5 from "../assets/signlang.jpeg";

const diplomaCourses = [
  { title: "Community Health & HIV/AIDS Management",      image: img1  },
  { title: "Nutrition & Dietetics",                       image: img2  },
  { title: "Community Health & Development",              image: img3  },
  { title: "Dental Assistant Technology",                 image: img4  },
  { title: "Business Management",                         image: img5  },
  { title: "Computer Applications",                       image: img6  },
  { title: "Water Technology & Plumbing",                 image: img7  },
  { title: "First Aid, Home Based Care & Drug Addiction Intervention", image: img8 },
  { title: "Food & Beverage",                             image: img9  },
  { title: "Environment, Climate Change & Health",        image: img10 },
  { title: "Bible Studies and Theology",                  image: img11 },
];

const shortCourses = [
  { title: "Certificate in HIV & HIV Counselling & Testing", image: sImg1 },
  { title: "Computer Packages",                              image: sImg2 },
  { title: "Home Management & Basic Care Giving (Basic Literacy)", image: sImg3 },
  { title: "Theology & Biblical Studies",                    image: sImg4 },
  { title: "Kenyan Sign Language",                          image: sImg5 },
];

const Courses = () => (
  <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Our Courses
      </h1>

      {/* Diploma & Certificate */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">
          Diploma & Certificate Courses
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
      <section>
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
    </div>
  </div>
);

export default Courses;
