import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-slate-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="md:text-lg text-sm font-bold">Redux App</div>
        <div className="space-x-1 flex">
            <Link to="/counter" className="cursor-pointer 
            transform transition-transform duration-100 hover:scale-105 flex  bg-slate-800 md:w-26 text-xs md:text-sm p-1 border-none hover:bg-slate-900  rounded-sm border rounded-md text-white justify-items-start">Counter App </Link>
            <Link to="/" className="cursor-pointer transform transition-transform duration-100 hover:scale-105 flex  bg-slate-800 md:w-26 text-xs p-1 border-none hover:bg-slate-900  rounded-sm border rounded-md text-white justify-items-start " >CRUD App</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
