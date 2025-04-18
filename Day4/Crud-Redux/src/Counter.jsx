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
    <div className='bg-slate-800 flex flex-col h-[530px]'>
      <h1 className='font-bold text-green-200  ml-10 mt-10 text-4xl '>COUNTER APP</h1>
      <h3 className='text-center text-red-800 font-bold text-2xl m-10'>count value is {countValue}</h3>
      <div className='flex '>
      <input type="number" name="count" value={count} onChange={(e)=>handleChange(e)} className='bg-white w-[20%] text-center' />
      <button className='bg-blue-400  rounded-md m-auto p-2' onClick={()=>dispatch(increaseCounter(count ||100))}>Increment by {count || 100}</button>
      <button className='bg-blue-400  rounded-md m-auto p-2' onClick={()=>dispatch(decreaseCounter(count || 100))}>Decrement by {count || 100}</button>
      <button className='bg-blue-400  rounded-md m-auto p-2' onClick={()=> dispatch(resetCounter())}>Reset to Zero</button>
      </div>
    </div>
  )
}

export default Counter
