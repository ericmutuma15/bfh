// src/components/Gallery.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Vite glob to load all graduation pictures
const galleryLoader = import.meta.glob(
  "../assets/gradPics/*.{jpg,jpeg,png,avif,webp}"
);

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    Promise.all(
      Object.values(galleryLoader).map((resolver) =>
        resolver().then((mod) => mod.default)
      )
    ).then(setImages);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800">First Graduation Gallery</h1>
          <Link
            to="/"
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            ← Back Home
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow">
              <img
                src={src}
                alt={`Graduation ${idx + 1}`}
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
