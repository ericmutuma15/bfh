import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutUs from './components/Reception';
import Laboratory from './components/Laboratory';
import Dental from './components/Dental';
import WardTheatre from './components/WardTheatre';
import Layout from './components/Layout';
import Courses from "./components/Courses";
import Waiting from './components/Waiting';
import HealthServices from './components/HealthServices';
import Appointments from './components/Appointments';
import Gallery from './components/Gallery';

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
          <Route path="/waiting" element={<Waiting />} />
          <Route path="/health-services" element={<HealthServices />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
