import React from 'react';

const UserStats = ({ totalChallenges, completedCount }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
      <div className="glass-card" style={{ textAlign: 'center', borderLeft: '4px solid #2563eb' }}>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Active Challenges</p>
        <h2 style={{ fontSize: '2.5rem' }}>{totalChallenges}</h2>
      </div>
      
      <div className="glass-card" style={{ textAlign: 'center', borderLeft: '4px solid #22c55e' }}>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Completed</p>
        <h2 style={{ fontSize: '2.5rem' }}>{completedCount}</h2>
      </div>

      <div className="glass-card" style={{ textAlign: 'center', borderLeft: '4px solid #f59e0b' }}>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Consistency</p>
        <h2 style={{ fontSize: '2.5rem' }}>85%</h2>
      </div>
    </div>
  );
};

export default UserStats;