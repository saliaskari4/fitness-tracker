import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StatsChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Progress %',
      data: [30, 45, 60, 20, 90, 55, 70],
      backgroundColor: 'rgba(37, 99, 235, 0.6)',
      borderColor: '#2563eb',
      borderWidth: 1,
      borderRadius: 8,
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true, grid: { color: '#1e293b' }, ticks: { color: '#94a3b8' } },
      x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
    },
    plugins: { legend: { display: false } }
  };

  return (
    <div className="glass-card" style={{ height: '350px' }}>
      <h3 style={{ marginBottom: '20px' }}>Weekly Activity</h3>
      <div style={{ height: '250px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default StatsChart;