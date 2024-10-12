'use client'
import React, { useState } from 'react';

const ManageContact = () => {
  // Sample data for demonstration. You can replace this with your data fetching logic.
  const [contacts, setContacts] = useState([
    { id: 1, fullName: 'John Doe', email: 'john@example.com', message: 'I am interested in your products.' },
    { id: 2, fullName: 'Jane Smith', email: 'jane@example.com', message: 'Can I get a custom pot design?' },
  ]);

  // Function to delete a contact message by ID
  const handleDelete = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    alert('Contact has been deleted.');
  };

  return (
    <div className="min-h-screen  p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Manage Contacts</h2>
        {contacts.length === 0 ? (
          <p className="text-center text-gray-500">No contact messages available.</p>
        ) : (
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div key={contact.id} className="p-4 border border-gray-300 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-medium">{contact.fullName}</p>
                    <p className="text-sm text-gray-500">{contact.email}</p>
                    <p className="mt-2">{contact.message}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-700 focus:outline-none"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageContact;
