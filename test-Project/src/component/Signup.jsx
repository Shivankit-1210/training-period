import React, { useState } from 'react'

const Signup = () =>{

    const [data,setData]= useState([]);

    const handleChange = (e)=>{
        const [name,value] = e.target;
        


    }

    return(
        <>
        <h1>Signup page</h1>
        <form onSubmit={handlesubmit}>
        <label htmlFor="Username">name</label>
        <input 
        type="text"
        name='name'
        value={data.name}
        onChange={handleChange} />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" />
        <br />
        <label htmlFor="password">password</label>
        <input type="password" />
        </form>
        https://roadmap.sh/react
        </>
    )
}

export default Signup;