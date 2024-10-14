'use client'
import React, { useState } from 'react';

const ManageContact = () => {
  const [contacts, setContacts] = useState([
    { id: 1, fullName: 'John Doe', email: 'john@example.com', message: 'I am interested in your products.' },
    { id: 2, fullName: 'Jane Smith', email: 'jane@example.com', message: 'Can I get a custom pot design?' }, 
  ]);

  const handleDelete = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    alert('Contact has been deleted.');
  };
    

  return (
    <div className="min-h-screen  mx-11">
      <div className="bg-white p-6 rounded-lg shadow-md w-full ">
        <h2 className="text-3xl font-semibold mb-6 text-center">Manage Contacts</h2>
        {contacts.length === 0 ? (
          <p className="text-center text-gray-500">No contact messages available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border-b font-medium text-gray-700">Full Name</th>
                  <th className="p-3 border-b font-medium text-gray-700">Email</th>
                  <th className="p-3 border-b font-medium text-gray-700">Message</th>
                  <th className="p-3 border-b font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact._id} className="hover:bg-gray-50">
                    <td className="p-3 border-b">{contact.fullName}</td>
                    <td className="p-3 border-b">{contact.email}</td>
                    <td className="p-3 border-b">{contact.message}</td>
                    <td className="p-3 border-b">
                      <button
                        onClick={() => handleDelete(contact.id)}
                        className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-700 focus:outline-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageContact;
