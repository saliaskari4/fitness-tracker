import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      alert("Login failed! Check your credentials.");
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="glass-card" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: '#94a3b8' }}>Email</label>
          <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
          
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: '#94a3b8' }}>Password</label>
          <input type="password" placeholder="••••••••" onChange={(e) => setPassword(e.target.value)} required />
          
          <button type="submit" style={{ width: '100%', padding: '12px', background: '#2563eb', color: 'white', marginTop: '10px' }}>
            Sign In
          </button>
        </form>
        <p style={{ marginTop: '1.5rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
          Don't have an account? <Link to="/signup" style={{ color: '#38bdf8', textDecoration: 'none' }}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;