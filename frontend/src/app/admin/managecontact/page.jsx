'use client'
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ManageContact = () => {
  const [contacts, setContacts] = useState([
    {
      _id: '',
      name: '',
      email: '',
      subject: '',
      message: ''
    },
  ]);

  const fetchContact = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact/getall`);
    console.log(res.status);
    const data = await res.json();
    console.table(data);
    setContacts(data);
  }
  useEffect(() => {
    fetchContact();
  }, []);

  const deleteContact = async (id) => {
    console.log(id);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact/delete/` + id, { method: 'DELETE' })
    if (res.status === 200) {
      toast.success('Contact Deleted Successfully');
      fetchContact();
    }
  }

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
                  <th className="p-6 border-b font-medium text-gray-700"> Name</th>
                  <th className="p-6 border-b font-medium text-gray-700">Email</th>
                  <th className="p-6 border-b font-medium text-gray-700">Subject</th>
                  <th className="p-6 border-b font-medium text-gray-700">Message</th>
                  <th className="p-6 border-b font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact._id} className="border-b dark:border-neutral-700">
                    <td className="px-6 py-3 text-sm font-medium text-gray-700 ">
                      {contact.name}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700 "> 
                      {contact.email}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700 ">
                      {contact.subject}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-500 ">
                      {contact.message}
                    </td>
                    <td className="px-6 py-3">
                      <button
                        className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                        onClick={() => deleteContact(contact._id)}
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
