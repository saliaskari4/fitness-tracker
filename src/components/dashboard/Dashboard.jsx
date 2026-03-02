import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, query, where, onSnapshot } from 'firebase/firestore';

// Sub-components
import UserStats from '../stats/UserStats';
import StatsChart from '../stats/StatsChart';
import CreateChallenge from '../challenges/CreateChallenge';
import ChallengeCard from '../challenges/ChallengeCard';
import Leaderboard from '../progress/Leaderboard';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [challenges, setChallenges] = useState([]);

  // Firestore se real-time challenges fetch karna
  useEffect(() => {
    if (!currentUser) return;
    const q = query(collection(db, 'challenges'), where('userId', '==', currentUser.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setChallenges(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (err) { console.error(err); }
  };

  const completedCount = challenges.filter(c => c.progress >= 100).length;

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px', color: '#f8fafc' }}>
      
      {/* 1. TOP BAR: User Summary */}
      <header className="glass-card" style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '15px 30px', marginBottom: '30px', borderRadius: '12px' 
      }}>
        <div style={{ display: 'flex', gap: '40px' }}>
          <div>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>Active Challenges</p>
            <h3 style={{ fontSize: '1.4rem', color: '#38bdf8' }}>{challenges.length}</h3>
          </div>
          <div>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>Completed</p>
            <h3 style={{ fontSize: '1.4rem', color: '#22c55e' }}>{completedCount}</h3>
          </div>
          <div>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>Consistency</p>
            <h3 style={{ fontSize: '1.4rem', color: '#f59e0b' }}>85%</h3>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{currentUser?.email}</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </header>

      {/* MAIN CONTENT GRID */}
      <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '30px' }}>
        
        {/* 2. LEFT SIDE: Analytical View */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          <div className="glass-card">
            <h3 style={{ marginBottom: '20px', fontSize: '1.1rem' }}>Weekly Activity Analysis</h3>
            <StatsChart />
          </div>

          <div className="glass-card">
            <h3 style={{ marginBottom: '20px', fontSize: '1.1rem' }}>Create New Challenge</h3>
            <CreateChallenge />
          </div>

          <div>
            <h3 style={{ marginBottom: '20px', fontSize: '1.2rem', color: '#38bdf8' }}>Active Challenges</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {challenges.map(challenge => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>
          </div>
        </section>

        {/* 3. RIGHT SIDE: Social & Competitive */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '10px' }}>Daily Target Status</p>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#38bdf8' }}>65% Done</div>
          </div>

          <Leaderboard />

          <div className="glass-card">
            <h4 style={{ marginBottom: '15px' }}>Quick Stats</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: '#94a3b8' }}>Longest Streak</span>
              <span style={{ fontWeight: 'bold', color: '#f59e0b' }}>12 Days</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#94a3b8' }}>Global Rank</span>
              <span style={{ fontWeight: 'bold' }}>#42</span>
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
};

export default Dashboard;