import React from 'react'
import { Increment, Decrement } from './counterSlice'
import { useDispatch,useSelector } from 'react-redux';

function Counter() {

    const dispatch = useDispatch();
    const initState = useSelector((state) => {
        return state.count;
    })

    

  return (
    <div>
        <button onClick={() => dispatch(Increment())}>Increment</button>
        <p>counter:{initState.counter}</p>
        <button onClick={() => dispatch(Decrement())}>Decrement</button>
    </div>
  )
}

export default Counter