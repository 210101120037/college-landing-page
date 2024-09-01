import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './css/NavBar.css';
import './css/About.css';
import './css/Services.css';
import './css/Contact.css';
import './css/Footer.css';
import './css/Login.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home'; // Ensure this file exists

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/login" element={loggedIn ? <Navigate to="/home" /> : <Login setLoggedIn={setLoggedIn} />} />
            <Route path="/home" element={loggedIn ? <Home /> : <Navigate to="/login" />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </main>
          <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
