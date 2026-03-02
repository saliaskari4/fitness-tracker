import React, { useState } from 'react';
import { db } from '../../firebase/config';
import { doc, updateDoc } from 'firebase/firestore';

const DailyProgress = ({ challengeId, currentProgress, totalGoal }) => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!value || loading) return;

    setLoading(true);
    try {
      const challengeRef = doc(db, 'challenges', challengeId);
      
      // Calculate how much percentage this addition adds
      // Formula: (AddedValue / TotalGoal) * 100
      const addedPercentage = (Number(value) / Number(totalGoal)) * 100;
      const newTotalProgress = Math.min(100, Math.round(currentProgress + addedPercentage));

      await updateDoc(challengeRef, {
        progress: newTotalProgress
      });
      
      setValue('');
    } catch (err) {
      console.error("Update failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleUpdate} style={{ display: 'flex', gap: '8px' }}>
      <input 
        type="number" 
        placeholder="Add units..." 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        style={{ 
          flex: 1, 
          padding: '10px', 
          fontSize: '0.85rem',
          margin: 0,
          background: 'rgba(15, 23, 42, 0.5)',
          border: '1px solid #334155'
        }}
      />
      <button 
        type="submit" 
        disabled={loading}
        style={{ 
          padding: '0 15px', 
          background: loading ? '#334155' : '#2563eb', 
          color: 'white',
          fontSize: '0.85rem',
          borderRadius: '8px',
          whiteSpace: 'nowrap'
        }}
      >
        {loading ? '...' : 'Update'}
      </button>
    </form>
  );
};

export default DailyProgress;