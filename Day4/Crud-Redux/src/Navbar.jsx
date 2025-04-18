import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-slate-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Redux App</div>
        <div className="space-x-1 flex">
            <Link to="/counter" className="cursor-pointer 
            transform transition-transform duration-100 hover:scale-105 flex  bg-slate-800 w-26 p-1 border-none hover:bg-slate-900  rounded-sm border rounded-md text-white justify-items-start">Counter App </Link>
            <Link to="/" className="cursor-pointer transform transition-transform duration-100 hover:scale-105 flex  bg-slate-800 w-26 p-1 border-none hover:bg-slate-900  rounded-sm border rounded-md text-white justify-items-start " >CRUD App</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
