import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory
import '../css/Login.css';

const Login = ({ setLoggedIn }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate(); // useNavigate hook for redirection

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple login check (for demonstration purposes)
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      setLoggedIn(true);
      alert('Login successful!');
      navigate('/home'); // Redirect to home page after successful login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <div className="landing-content">
        <h1>Welcome to Our Website</h1>
        <p>Your journey to the best services starts here. Explore our features and join us today!</p>
        <div className="features">
          <div className="feature">Feature 1: High-Quality Services</div>
          <div className="feature">Feature 2: Customer Satisfaction</div>
          <div className="feature">Feature 3: 24/7 Support</div>
        </div>
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
