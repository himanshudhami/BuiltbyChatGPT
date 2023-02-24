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

const Customers = () => {
  const [Customers, setCustomers] = useState([
    { id: uuidv4(), name: "Apple Inc.", location: "Cupertino, CA" },
    { id: uuidv4(), name: "Google LLC", location: "Mountain View, CA" },
    { id: uuidv4(), name: "Amazon.com, Inc.", location: "Seattle, WA" },
  ]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newCustomerName, setNewCustomerName] = useState("");
  const [newCustomerLocation, setNewCustomerLocation] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleNameChange = (event) => {
    setNewCustomerName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setNewCustomerLocation(event.target.value);
  };

  const addCustomer = () => {
    const newCustomer = {
      id: uuidv4(),
      name: newCustomerName,
      location: newCustomerLocation,
    };
    setCustomers([...Customers, newCustomer]);
    setModalIsOpen(false);
    setNewCustomerName("");
    setNewCustomerLocation("");
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Customers</h1>
      <table className="w-full text-left table-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Location</th>
          </tr>
        </thead>
        <tbody>
          {Customers.map((Customer) => (
            <tr key={Customer.id} className="bg-white">
              <td className="border px-4 py-2">{Customer.id}</td>
              <td className="border px-4 py-2">{Customer.name}</td>
              <td className="border px-4 py-2">{Customer.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
  
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>Add Customer</button>
  
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <h2 className="text-2xl font-bold">Add Customer</h2>
        <div className="p-4">
          <label className="block font-bold">
            Name:
            <input className="border border-gray-400 p-2" type="text" value={newCustomerName} onChange={handleNameChange} />
          </label>
          <br />
          <label className="block font-bold">
            Location:
            <input className="border border-gray-400 p-2" type="text" value={newCustomerLocation} onChange={handleLocationChange} />
          </label>
          <br />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addCustomer}>Add</button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4" onClick={closeModal}>Cancel</button>
        </div>
      </Modal>
    </div>
  );
  
};

export default Customers;
