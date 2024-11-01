import React, { useState, useEffect } from 'react';

export default function UpdateEmployeeForm({ data, onUpdateEmplyee }) {

  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    salary: ''
  });

  useEffect(() => {
    if (data) {
      setFormData({
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        department: data.department,
        salary: data.salary,
      });
    }
  }, [data]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={onUpdateEmplyee} className="bg-white p-5 rounded-lg shadow-lg m-0 text-black">

      <input type="hidden" id="id" name="id" value={formData.id}/>

      <div className="mb-0">
        <label htmlFor="firstName" className="block text-gray-700">First Name</label>
        <input 
          id="firstName"
          name="firstName" 
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={formData.firstName} 
          onChange={handleChange} 
        />
      </div>

      <div className="mb-0">
        <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
        <input 
          id="lastName"
          name="lastName" 
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={formData.lastName}
          onChange={handleChange} 
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input 
          id="email"
          name="email" 
          type="email"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={formData.email} 
          onChange={handleChange} 
        />
      </div>

      <div className="mb-4">
        <label htmlFor="department" className="block text-gray-700">Department</label>
        <input 
          id="department"
          name="department" 
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={formData.department}
          onChange={handleChange} 
        />
      </div>

      <div className="mb-4">
        <label htmlFor="salary" className="block text-gray-700">Salary</label>
        <input 
          id="salary"
          name="salary"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={formData.salary} 
          onChange={handleChange} 
        />
      </div>

      <div className="flex justify-end">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
    </form>
  );
}