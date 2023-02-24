import React, { Component } from 'react';
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

class Companies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [
        { id: uuidv4(), name: 'Apple Inc.', location: 'Cupertino, CA' },
        { id: uuidv4(), name: 'Google LLC', location: 'Mountain View, CA' },
        { id: uuidv4(), name: 'Amazon.com, Inc.', location: 'Seattle, WA' },
      ],
      modalIsOpen: false,
      newCompanyName: '',
      newCompanyLocation: '',
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleNameChange = (event) => {
    this.setState({ newCompanyName: event.target.value });
  };

  handleLocationChange = (event) => {
    this.setState({ newCompanyLocation: event.target.value });
  };

  addCompany = () => {
    const { newCompanyName, newCompanyLocation } = this.state;
    const newCompany = {
      id: uuidv4(),
      name: newCompanyName,
      location: newCompanyLocation,
    };
    this.setState((prevState) => ({
      companies: [...prevState.companies, newCompany],
      modalIsOpen: false,
      newCompanyName: '',
      newCompanyLocation: '',
    }));
  };

  render() {
    const { companies, modalIsOpen, newCompanyName, newCompanyLocation } = this.state;

    return (
      <div>
        <h1>Companies</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.id}>
                <td>{company.id}</td>
                <td>{company.name}</td>
                <td>{company.location}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button onClick={this.openModal}>Add Company</button>

        <Modal isOpen={modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>
          <h2>Add Company</h2>
          <div>
            <label>
              Name:
              <input type="text" value={newCompanyName} onChange={this.handleNameChange} />
            </label>
          </div>
          <div>
            <label>
              Location:
              <input type="text" value={newCompanyLocation} onChange={this.handleLocationChange} />
            </label>
          </div>
          <div>
            <button onClick={this.addCompany}>Add</button>
            <button onClick={this.closeModal}>Cancel</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Companies;
