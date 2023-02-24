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
    <div className="text-center">
      <h1 className="text-2xl font-bold">Companies</h1>
      <table className="w-full text-left table-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Location</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id} className="bg-white">
              <td className="border px-4 py-2">{company.id}</td>
              <td className="border px-4 py-2">{company.name}</td>
              <td className="border px-4 py-2">{company.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
  
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>Add Company</button>
  
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <h2 className="text-2xl font-bold">Add Company</h2>
        <div className="p-4">
          <label className="block font-bold">
            Name:
            <input className="border border-gray-400 p-2" type="text" value={newCompanyName} onChange={handleNameChange} />
          </label>
          <br />
          <label className="block font-bold">
            Location:
            <input className="border border-gray-400 p-2" type="text" value={newCompanyLocation} onChange={handleLocationChange} />
          </label>
          <br />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addCompany}>Add</button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4" onClick={closeModal}>Cancel</button>
        </div>
      </Modal>
    </div>
  );
  
};

export default Companies;
