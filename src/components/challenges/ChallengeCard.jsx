import React from 'react';
import DailyProgress from '../progress/DailyProgress';

const ChallengeCard = ({ challenge }) => {
  // Progress color based on percentage
  const getProgressColor = (percent) => {
    if (percent >= 100) return '#22c55e'; // Green
    if (percent > 50) return '#38bdf8';   // Blue
    return '#6366f1';                     // Indigo
  };

  return (
    <div className="glass-card" style={{ 
      padding: '24px', 
      position: 'relative', 
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      {/* Title & Badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
        <div>
          <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '4px' }}>{challenge.title}</h4>
          <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Goal: {challenge.goal} units | {challenge.duration} Days</p>
        </div>
        <span style={{ 
          fontSize: '0.75rem', 
          padding: '4px 8px', 
          background: 'rgba(56, 189, 248, 0.1)', 
          color: '#38bdf8', 
          borderRadius: '4px',
          fontWeight: 'bold'
        }}>
          ACTIVE
        </span>
      </div>

      {/* Progress Section */}
      <div style={{ margin: '20px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', alignItems: 'baseline' }}>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Overall Progress</span>
          <span style={{ fontSize: '1.1rem', fontWeight: '700', color: getProgressColor(challenge.progress) }}>
            {challenge.progress}%
          </span>
        </div>
        
        {/* Background Track */}
        <div style={{ width: '100%', height: '10px', background: '#0f172a', borderRadius: '10px' }}>
          {/* Animated Fill */}
          <div className="progress-bar-fill" style={{ 
            width: `${challenge.progress}%`, 
            height: '100%', 
            background: `linear-gradient(90deg, ${getProgressColor(challenge.progress)}, #a855f7)`, 
            borderRadius: '10px',
            boxShadow: `0 0 10px ${getProgressColor(challenge.progress)}44`
          }}></div>
        </div>
      </div>

      {/* Direct Update Component */}
      <div style={{ marginTop: 'auto', borderTop: '1px solid #334155', paddingTop: '15px' }}>
        <DailyProgress 
          challengeId={challenge.id} 
          currentProgress={challenge.progress} 
          totalGoal={challenge.goal} 
        />
      </div>
    </div>
  );
};

export default ChallengeCard;