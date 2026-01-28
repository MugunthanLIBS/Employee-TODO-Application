import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, item, onUpdate }) => {
  const [editInput, setEditInput] = useState({ name: "", age: "", contact: "" });

  useEffect(() => {
    if (item) {
      setEditInput({
        name: item.name,
        age: item.age,
        contact: item.contact,
      });
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editInput);
  };

  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 shadow-2xl z-50">
        <button
          onClick={onClose}
          className="float-right text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-gray-700">Edit Employee</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={editInput.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            name="age"
            value={editInput.age}
            onChange={handleChange}
            placeholder="Age"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="contact"
            value={editInput.contact}
            onChange={handleChange}
            placeholder="Contact"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="flex space-x-3 justify-between">
            <button
              type="button"
              onClick={onClose}
              className=" bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
             className="hover:bg-gray-200 hover:text-[#27bbd0] bg-[#27bbd0] w-fit p-2 rounded-lg shadow-lg"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;