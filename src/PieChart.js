import React, { Component } from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

class PieChartComponent extends Component {
  render() {
    const data = [
      { name: 'Chrome', value: 45 },
      { name: 'Firefox', value: 30 },
      { name: 'Safari', value: 15 },
      { name: 'IE', value: 10 },
    ];

    return (
      <PieChart width={400} height={400}>
        <Pie dataKey="value" nameKey="name" data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
        <Tooltip />
        <Legend />
      </PieChart>
    );
  }
}

export default PieChartComponent;
