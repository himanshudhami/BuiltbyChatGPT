import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class Chart extends Component {
  render() {
    const data = [
      { name: 'January', sales: 20 },
      { name: 'February', sales: 10 },
      { name: 'March', sales: 30 },
      { name: 'April', sales: 15 },
      { name: 'May', sales: 25 },
      { name: 'June', sales: 40 },
    ];

    return (
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
      </BarChart>
    );
  }
}

export default Chart;
