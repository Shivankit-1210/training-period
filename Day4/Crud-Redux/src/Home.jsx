import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { deleteUser } from "./UserReducer";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log("delete inside");
    const duser = users.find((user) => user.id == id);
    dispatch(
      deleteUser({
        id: id,
        name: duser.name,
        email: duser.email,
      })
    );
    toast.error("User deleted ");
  };
  return (
    <div className=" w-[100%] flex flex-col h-[530px] m-2">
      <Toaster />
      <div className="flex flex-col item-center justify-center gap-12 ">
        <Link
          to="/create "
          className="cursor-pointer flex text-center bg-slate-500 md:w-22 w-20 text-xs font-bold p-1 border-none hover:bg-slate-900  rounded-sm border rounded-md text-white justify-items-start "
        >
          Add User +
        </Link>
      </div>

      <div className="w-[100%]  flex item-center justify-center ">
        <table className="md:m-2 mt-5 bg-slate-300 md:w-[80%] w-[80%] border rounded-md">
          <thead className="border-slate-800 border-b bg-slate-200">
            <tr>
              <th className="text-left md:p-2">Id</th>
              <th className="text-left md:p-2 p-1">Name</th>
              <th className="text-left md:p-2 p-1">Email</th>
              <th className="text-left md:p-2 p-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b border-slate-400 ">
                <td className="md:p-2 text-[12px] md:text-lg">{user.id}</td>
                <td className="md:p-2 text-[12px] md:text-lg">{user.name}</td>
                <td className="md:p-2 text-[12px] md:text-lg">{user.email}</td>
                <td className="md:p-2 text-[12px] md:text-lg">
                  <div className=" md:flex-row flex flex-col gap-2 mx-2 my-2  md:gap-0 items-center md:justify-start ">
                    <Link
                      to={`/read/${user.id}`}
                      className="bg-blue-400 hover:bg-blue-500 md:p-1 md:h-8 md:m-1 w-16 rounded-sm cursor-pointer transform transition-transform duration-100 hover:scale-105 text-center"
                    >
                      Read
                    </Link>
                    <Link
                      to={`/edit/${user.id}`}
                      className="bg-yellow-400 hover:bg-yellow-500 md:p-1 md:h-8 md:m-1 w-16 rounded-sm cursor-pointer transition-transform duration-100 hover:scale-105 text-center"
                    >
                      Edit
                    </Link>
                    <button
                      className="bg-red-500 hover:bg-red-600 md:p-1 md:h-8 md:m-1 w-16 rounded-sm cursor-pointer transition-transform duration-100 hover:scale-105 text-center"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
