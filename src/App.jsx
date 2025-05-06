import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Reception from './components/Reception';
import Laboratory from './components/Laboratory';
import Dental from './components/Dental';
import WardTheatre from './components/WardTheatre';
import HealthConsultation from './components/HealthConsultation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reception" element={<Reception />} />
        <Route path="/laboratory" element={<Laboratory />} />
        <Route path="/dental" element={<Dental />} />
        <Route path="/ward-theatre" element={<WardTheatre />} />
        <Route path="/health-consultation" element={<HealthConsultation />} />
      </Routes>
    </Router>
  );
}

export default App;
