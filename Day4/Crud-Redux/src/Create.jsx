import React, { useState } from 'react';
import { addUser } from './UserReducer';
import {  useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';



const Create = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
 //For validating
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
  
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long";
    }
  
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // return true if no errors
  };
  

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

    if (!validate()) return;

    const {name, email} = formData;
    dispatch(addUser({id:users.length !== 0 ? `${parseInt(users[users.length - 1].id) + 1}` : "1", name, email}))
    toast.success("User Added successfully !")
    navigate('/')

    // Clear form after submission
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="w-[35%]  mx-auto mb-[190px] mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Create New User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 p-2 rounded "
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            // type="email"
            name="email"
            className="w-full border border-gray-300 p-2 rounded "
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <button
          type="submit"
          className="w-[30%] mx-40 bg-slate-500 text-white py-2 px-4 rounded cursor-pointer transform transition-transform duration-100 hover:scale-105 "

        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default Create;
