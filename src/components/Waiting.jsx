// src/components/Waiting.jsx
import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/bg1.jpeg";

export default function Waiting() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-md">
        {/* Spinner */}
        <div className="mb-8">
          <svg
            className="animate-spin h-16 w-16 text-white mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <p className="mb-6 text-lg">
          We're updating this section of the application. Thanks for your patience—exciting features are on the way!
        </p>

        <Link
          to="/"
          className="inline-block bg-white text-black px-5 py-2 rounded hover:bg-gray-200 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
