import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/config';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useAuth } from '../../contexts/AuthContext';

const ChallengeList = () => {
  const [challenges, setChallenges] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const q = query(collection(db, 'challenges'), where('userId', '==', currentUser.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setChallenges(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, [currentUser]);

  return (
    <div style={{ display: 'grid', gap: '15px' }}>
      {challenges.map(item => (
        <div key={item.id} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem' }}>
          <div>
            <h4 style={{ color: '#38bdf8' }}>{item.title}</h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Goal: {item.goal} | Duration: {item.duration} Days</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{item.progress}%</span>
            <div style={{ width: '100px', height: '6px', background: '#334155', borderRadius: '10px', marginTop: '5px' }}>
              <div style={{ width: `${item.progress}%`, height: '100%', background: '#2563eb', borderRadius: '10px' }}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChallengeList;