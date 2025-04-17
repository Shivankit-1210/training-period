import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import Toaster from 'react-hot-toast'



const Home = () => {

    

    const users = useSelector((state)=> state.users)
    console.log("hi", users)
  return (
    <div className=' w-[80%] flex flex-col'>
      {/* <Toaster/> */}
       <Link to="/create " className='cursor-pointer flex text-center bg-slate-800 w-18 p-1 border-none hover:bg-slate-900  rounded-sm border text-white justify-items-start '>Create +</Link >
       <table className='m-2'>
        <thead className=' border-slate-800 border-b'>
            <tr >
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
{
    users.map((user,index)=>(
        <tr key={index}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
           <Link to={`/edit/${user.id}` }className='bg-yellow-400 hover:bg-yellow-500 p-1 m-1 rounded-sm  cursor-pointer'>Edit</Link>
           <button className='bg-red-500 hover:bg-red-600 p-1 m-1 rounded-sm cursor-pointer'>Delete</button>
        </td>
       </tr>
    )
    )
}
        </tbody>
       </table>
    </div>
  )
}

export default Home
