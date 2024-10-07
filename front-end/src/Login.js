import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    // Here, handle the login logic (e.g., call an API or authentication service)
    console.log('Username:', username);
    console.log('Password:', password);
  };

  // Function to navigate to the SearchBooks page
  const handleSearchBooks = () => {
    navigate('/searchBooks'); // Update this path as necessary for your route
  };

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/library.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Full page height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        position: 'relative', // Add position relative to the parent div
      }}
    >
      {/* Book Search Button */}
      <button
        onClick={handleSearchBooks}
        style={{
          position: 'absolute', // Position it absolutely
          top: '20px', // Adjust distance from the top
          right: '20px', // Adjust distance from the right
          padding: '10px 20px',
          cursor: 'pointer',
        }}
      >
        Book Search
      </button>
      
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent background
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              style={{ padding: '10px', width: '200px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={{ padding: '10px', width: '200px' }}
              required
            />
          </div>
          <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
