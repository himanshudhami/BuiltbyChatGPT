import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./styles/tailwind-pre-build.css";
import Dashboard from './Dashboard';
import AddCompany from './Companies';
import AddCustomer from './Customers';




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul class="flex">
              <li class="mr-3">
                <Link class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" to="/">Dashboard</Link>
              </li>
              <li class="mr-3">
                <Link class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" to="/add-company">Add Company</Link>
              </li>
              <li class="mr-3">
                <Link class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" to="/add-customer">Add Customer</Link>
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
