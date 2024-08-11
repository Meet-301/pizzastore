import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer'; // Import the Footer component
import './App.css'; // Import the CSS file for styling

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer /> {/* Place the Footer component here */}
      </div>
    </Router>
  );
}

export default App;