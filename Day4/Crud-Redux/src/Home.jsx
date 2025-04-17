import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { deleteUser } from "./UserReducer";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete=(id)=>{
    console.log("delete inside")
    const duser = users.find(user=>user.id == id);
    dispatch(deleteUser({
      id: id,
      name: duser.name,
      email: duser.email,
    }))
  }
    return (
    <div className=" w-[100%] flex flex-col ">
      <Toaster />
      <Link
        to="/create "
        className="cursor-pointer flex text-center bg-slate-800 w-18 p-1 border-none hover:bg-slate-900  rounded-sm border rounded-md text-white justify-items-start "
      >
        Create +
      </Link>
      <div className="w-[100%]  flex item-center justify-center">
        <table className="m-2 bg-slate-300 w-[40%] border rounded-md">
          <thead className="border-slate-800 border-b bg-slate-200">
            <tr>
              <th className="text-left p-2">Id</th>
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Email</th>
              <th className="text-left p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b border-slate-400">
                <td className="p-2">{user.id}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">
                  <Link
                    to={`/edit/${user.id}`}
                    className="bg-yellow-400 hover:bg-yellow-500 p-1 m-1 rounded-sm cursor-pointer"
                  >
                    Edit
                  </Link>
                  <button className="bg-red-500 hover:bg-red-600 p-1 m-1 rounded-sm cursor-pointer" onClick={()=>handleDelete(user.id)}>
                    Delete
                  </button>
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
