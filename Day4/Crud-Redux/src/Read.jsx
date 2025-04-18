import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const Read = () => {
  const users = useSelector((state) => state.users);
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const Ruser = users.find((e) => e.id == id);
    setUser(Ruser);
  }, [id, users]);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="h-[540px] flex items-center justify-center   p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-slate-600 mb-6">
          User Details
        </h1>
        <div className="space-y-4 text-lg text-gray-700">
          <div className="flex ">
            <span className="font-semibold">User ID:</span>
            <span className='ml-2'>{user.id}</span>
          </div>
          <div className="flex ">
            <span className="font-semibold">Name:</span>
            <span className='ml-5'>{user.name}</span>
          </div>
          <div className="flex ">
            <span className="font-semibold">Email:</span>
            <span className='ml-6'>{user.email}</span>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="px-6 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition duration-200"
          >
            Close
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Read;


