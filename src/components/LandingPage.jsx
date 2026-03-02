import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, #38bdf8, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Level Up Your Fitness
      </h1>
      <p style={{ color: '#94a3b8', maxWidth: '600px', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
        Track your challenges, compete with friends, and visualize your progress in one aesthetic dashboard.
      </p>
      <div style={{ display: 'flex', gap: '15px' }}>
        <Link to="/signup" style={{ padding: '12px 30px', background: '#2563eb', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>Get Started</Link>
        <Link to="/login" style={{ padding: '12px 30px', border: '1px solid #334155', color: 'white', textDecoration: 'none', borderRadius: '8px' }}>Login</Link>
      </div>
    </div>
  );
};

export default LandingPage;