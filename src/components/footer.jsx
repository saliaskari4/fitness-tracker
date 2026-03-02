import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ 
      marginTop: '100px', 
      borderTop: '1px solid #1e293b', 
      padding: '60px 20px 30px 20px',
      background: 'rgba(15, 23, 42, 0.9)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '40px' 
      }}>
        
        {/* Brand Column */}
        <div style={{ flex: '2' }}>
          <h2 style={{ color: '#38bdf8', fontSize: '1.5rem', marginBottom: '15px' }}>FIT-TRACK</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '300px' }}>
            Transform your fitness journey with our modern tracking system. Stay disciplined, track daily, and hit your goals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: '#f8fafc', marginBottom: '20px', fontSize: '1rem' }}>Product</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}><Link to="/dashboard" style={linkStyle}>Dashboard</Link></li>
            <li style={{ marginBottom: '10px' }}><Link to="/" style={linkStyle}>Features</Link></li>
            <li style={{ marginBottom: '10px' }}><Link to="/leaderboard" style={linkStyle}>Leaderboard</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 style={{ color: '#f8fafc', marginBottom: '20px', fontSize: '1rem' }}>Support</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}><a href="#" style={linkStyle}>FAQ</a></li>
            <li style={{ marginBottom: '10px' }}><a href="#" style={linkStyle}>Privacy Policy</a></li>
            <li style={{ marginBottom: '10px' }}><a href="#" style={linkStyle}>Terms of Service</a></li>
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div>
          <h4 style={{ color: '#f8fafc', marginBottom: '20px', fontSize: '1rem' }}>Stay Connected</h4>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
            <span style={socialIconStyle}>𝕏</span>
            <span style={socialIconStyle}>📸</span>
            <span style={socialIconStyle}>💼</span>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Update on new features every week.</p>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '40px auto 0 auto', 
        paddingTop: '20px', 
        borderTop: '1px solid #1e293b', 
        textAlign: 'center',
        color: '#64748b',
        fontSize: '0.85rem'
      }}>
        © 2026 Fit-Track AI. All rights reserved. Designed with ❤️ for Fitness.
      </div>
    </footer>
  );
};

// Inline Styles
const linkStyle = {
  textDecoration: 'none',
  color: '#94a3b8',
  fontSize: '0.9rem',
  transition: 'color 0.2s ease'
};

const socialIconStyle = {
  width: '35px',
  height: '35px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#1e293b',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '1rem'
};

export default Footer;