import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter, resetCounter } from './CounterSlice';



const Counter = () => {

    const [count,setCount] = useState()

    const handleChange=(e)=>{
      e.preventDefault();
      setCount(Number(e.target.value))
    }


    const countValue = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
  return (
    <div className='bg-slate-400 w-[60%] lg:w-[30%] md:w-[40%] rounded-xl flex flex-col items-center mt-10 p-5 '>
      <h1 className='font-bold text-green-200 text-2xl md:text-4xl '>COUNTER APP</h1>
      <h3 className='text-center text-red-800 font-bold text-lg md:text-2xl m-10'>count value is {countValue}</h3>
      <div className='flex  flex-col gap-y-4 items-center'>
      <input className='bg-white md:w-full text-center p-2 rounded-sm'  type="number" name="count" placeholder='Enter any number' value={count} onChange={(e)=>handleChange(e)} />
      <button className='bg-blue-400  rounded-md m-auto p-2 w-full' onClick={()=>dispatch(increaseCounter(count ||100))}>Increment by {count || 100}</button>
      <button className='bg-blue-400  rounded-md m-auto p-2  w-full' onClick={()=>dispatch(decreaseCounter(count || 100))}>Decrement by {count || 100}</button>
      <button className='bg-blue-400  rounded-md m-auto p-2  w-full' onClick={()=> dispatch(resetCounter())}>Reset to Zero</button>
      </div>
    </div>
  )
}

export default Counter
