import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Home = () => {

    

    const users = useSelector((state)=> state.users)
    console.log("hi", users)
  return (
    <div className=' w-[80%] flex flex-col'>
       <Link to="/create " className='cursor-pointer flex text-center bg-slate-800 w-18 p-1  rounded-sm border text-white justify-items-start '>Create +</Link >
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
           <button className='bg-yellow-500 p-1 m-1 rounded-sm '>Edit</button>
           <button className='bg-red-500 p-1 m-1 rounded-sm'>Delete</button>
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
