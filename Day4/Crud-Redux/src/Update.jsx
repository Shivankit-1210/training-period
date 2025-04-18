import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateUser } from './UserReducer';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';




const Update = () => {

  
  const {id} = useParams();
  const users = useSelector((state)=>state.users)  
  const  existingUser = users.find((item)=>item.id == id);
  
  const {name,email} = existingUser;
  
  const [EditData, setEditData] = useState({
    name: name,
    email: email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("inside update user")
    dispatch(updateUser({
      id: id,
      name: EditData.name,
      email: EditData.email, 
    }))
   toast.success("User Updated successfully 😊")
    navigate("/")
    // Clear form after submission
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="w-[30%] mx-auto mt-10 mb-[190px] p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Update User</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 p-2 rounded "
            value={EditData.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 p-2 rounded "
            value={EditData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-slate-500 text-white py-2 px-4 rounded cursor-pointer"
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default Update ;
