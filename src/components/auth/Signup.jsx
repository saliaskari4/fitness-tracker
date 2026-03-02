import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("Passwords do not match!");
    }
    try {
      await signup(email, password);
      navigate('/dashboard');
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <div className="glass-card" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 style={{ marginBottom: '0.5rem', textAlign: 'center', fontSize: '1.8rem' }}>Create Account</h2>
        <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '2rem', fontSize: '0.9rem' }}>
          Start your 5-day fitness challenge today.
        </p>
        
        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: '#94a3b8' }}>Email Address</label>
          <input type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required />
          
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: '#94a3b8' }}>Password</label>
          <input type="password" placeholder="Create a strong password" onChange={(e) => setPassword(e.target.value)} required />

          <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: '#94a3b8' }}>Confirm Password</label>
          <input type="password" placeholder="Repeat password" onChange={(e) => setConfirmPassword(e.target.value)} required />
          
          <button type="submit" style={{ width: '100%', padding: '12px', background: '#2563eb', color: 'white', marginTop: '15px', fontSize: '1rem' }}>
            Get Started Free
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
          Already a member? <Link to="/login" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: '600' }}>Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;