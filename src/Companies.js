import React, { useState } from "react";
import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Companies = () => {
  const [companies, setCompanies] = useState([
    { id: uuidv4(), name: "Apple Inc.", location: "Cupertino, CA" },
    { id: uuidv4(), name: "Google LLC", location: "Mountain View, CA" },
    { id: uuidv4(), name: "Amazon.com, Inc.", location: "Seattle, WA" },
  ]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newCompanyName, setNewCompanyName] = useState("");
  const [newCompanyLocation, setNewCompanyLocation] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleNameChange = (event) => {
    setNewCompanyName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setNewCompanyLocation(event.target.value);
  };

  const addCompany = () => {
    const newCompany = {
      id: uuidv4(),
      name: newCompanyName,
      location: newCompanyLocation,
    };
    setCompanies([...companies, newCompany]);
    setModalIsOpen(false);
    setNewCompanyName("");
    setNewCompanyLocation("");
  };

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

      <button onClick={openModal}>Add Company</button>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <h2>Add Company</h2>
        <div>
          <label>
            Name:
            <input type="text" value={newCompanyName} onChange={handleNameChange} />
          </label>
          <br />
          <label>
            Location:
            <input type="text" value={newCompanyLocation} onChange={handleLocationChange} />
          </label>
          <br />
          <button onClick={addCompany}>Add</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </Modal>
    </div>
  );
};

export default Companies;
