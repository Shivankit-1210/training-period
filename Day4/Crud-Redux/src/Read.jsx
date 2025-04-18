import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';

const Read = () => {
    const users = useSelector((state)=> state.users);

    const [user,setUser]= useState(null)

    const {id} = useParams();

    useEffect(()=>{
        
        const Ruser = users.find((e)=>e.id==id)
        setUser(Ruser)
    },[id,users])
    
    if(!user){
        return <div>Loading....</div>
    }

  return (
    <div className=' h-[530px] flex items-center justify-center'>
      <div className='w-[30%] h-[50%] bg-white flex flex-col rounded shadow-xl '>
      <h1 className='text-center m-2 font-medium text-2xl'>User Details</h1>
      <div className='flex flex-col items-center justify-center'>
      <div className='bg-blue-400 flex flex-col my-5 mx-0 py-2 text-xl'>
         <span>User Id: {user.id}</span>
         <span>User Name: {user.name}</span>
         <span>User Email: {user.email}</span>
      </div>
      <Link className='bg-red-500 w-[15%] text-center rounded font-medium' to="/">Close</Link>
      </div>
      
      </div>
    </div>
  )
}

export default Read
