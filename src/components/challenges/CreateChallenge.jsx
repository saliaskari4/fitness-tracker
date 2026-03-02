import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useFirestore } from '../../hooks/useFirestore';

const CreateChallenge = () => {
  const [title, setTitle] = useState('');
  const [goal, setGoal] = useState('');
  const [duration, setDuration] = useState('');
  const { currentUser } = useAuth();
  const { addDocument } = useFirestore('challenges');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDocument({
      title,
      goal,
      duration: Number(duration),
      userId: currentUser.uid,
      progress: 0,
      createdAt: new Date()
    });
    setTitle(''); setGoal(''); setDuration('');
    alert("Challenge Created!");
  };

  return (
    <div className="glass-card" style={{ marginBottom: '2rem' }}>
      <h3 style={{ marginBottom: '1rem' }}>Start New Challenge</h3>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: '10px', alignItems: 'end' }}>
        <div>
          <label style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Challenge Name</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. 50 Pushups" required />
        </div>
        <div>
          <label style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Daily Goal</label>
          <input type="text" value={goal} onChange={(e) => setGoal(e.target.value)} placeholder="e.g. 50" required />
        </div>
        <div>
          <label style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Duration (Days)</label>
          <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="30" required />
        </div>
        <button type="submit" style={{ padding: '12px 25px', background: '#2563eb', color: 'white', marginBottom: '1rem' }}>Add</button>
      </form>
    </div>
  );
};

export default CreateChallenge;