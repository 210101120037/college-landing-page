import React from 'react';
import '../css/About.css'; // Updated import path

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Us</h2>
        <p className="intro">
          We are a company dedicated to providing the best services in the industry. Our goal is to exceed client expectations through our innovative solutions and exceptional customer service.
        </p>
        <div className="company-history">
          <h3>Our History</h3>
          <p>
            Founded in 2010, we have grown from a small startup into a leading player in our field. Over the years, we have expanded our services and built a team of dedicated professionals committed to delivering excellence.
          </p>
        </div>
        <div className="mission-statement">
          <h3>Our Mission</h3>
          <p>
            Our mission is to empower businesses by providing cutting-edge solutions and unparalleled support. We aim to be the go-to partner for companies seeking to enhance their operational efficiency and achieve their strategic goals.
          </p>
        </div>
        <div className="meet-the-team">
          <h3>Meet the Team</h3>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h4>Jane Doe</h4>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h4>John Smith</h4>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h4>Emily Johnson</h4>
            <p>COO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
