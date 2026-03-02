import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/config';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'challenges'), orderBy('progress', 'desc'), limit(5));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setLeaders(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  return (
    <div className="glass-card">
      <h3 style={{ marginBottom: '1.5rem', color: '#38bdf8' }}>🏆 Global Leaderboard</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ color: '#94a3b8', borderBottom: '1px solid #334155', textAlign: 'left' }}>
            <th style={{ padding: '10px' }}>Challenge</th>
            <th style={{ padding: '10px' }}>Progress</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map(user => (
            <tr key={user.id} style={{ borderBottom: '1px solid #1e293b' }}>
              <td style={{ padding: '12px' }}>{user.title}</td>
              <td style={{ padding: '12px', fontWeight: 'bold', color: '#22c55e' }}>{user.progress}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;