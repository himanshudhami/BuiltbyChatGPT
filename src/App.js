import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BarChart from './BarChart';
import PieChartComponent from './PieChart';
import AddCompany from './Companies';
import AddCustomer from './Customers';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <BarChart />
        <PieChartComponent />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/add-company">Add Company</Link>
              </li>
              <li>
                <Link to="/add-customer">Add Customer</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-company" element={<AddCompany />} />
            <Route path="/add-customer" element={<AddCustomer />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
