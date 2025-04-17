import React, { useState } from 'react';
import { addUser } from './UserReducer';
import {  useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Create = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  //access users globally using useselector
 const users = useSelector((state)=>state.users)

  const dispatch =  useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email} = formData;
    dispatch(addUser({id:users[users.length -1].id +1, name, email}))
    navigate('/')

    // Clear form after submission
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Create New User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 p-2 rounded "
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 p-2 rounded "
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded "
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default Create;
