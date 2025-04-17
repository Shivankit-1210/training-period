import React from 'react'
import { useSelector } from 'react-redux'


const Home = () => {

    const users = useSelector((state)=> state.users)
    console.log(users)
  return (
    <div className='bg-yellow-200 w-[80%] flex flex-col'>
       <h2 className='font-bold text-center text-slate-800'>CRUD app Using redux</h2>
       <button className='cursor-pointer flex bg-slate-800 w-20 rounded-sm border text-white justify-items-start '>Create +</button>
       <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
       </table>
    </div>
  )
}

export default Home
