import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutUs from './components/Reception';
import Laboratory from './components/Laboratory';
import Dental from './components/Dental';
import WardTheatre from './components/WardTheatre';
import Layout from './components/Layout';
import Courses from "./components/Courses";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/reception" element={<AboutUs />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/dental" element={<Dental />} />
          <Route path="/ward-theatre" element={<WardTheatre />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
