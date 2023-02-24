import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Bar Chart</h2>
        <BarChart />
      </div>
      <div>
        <h2>Pie Chart</h2>
        <PieChart />
      </div>
    </div>
  );
}

export default Dashboard;
