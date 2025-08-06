import React, { useReducer } from 'react'

const initialState={
    count:0,
}

function counterApp(state,action){

    switch(action.type){
        case "INCRE":
            return {...state, count:state.count+1};


        case "DECRE": 
            return {...state,count:state.count-1};

        default :
            return state;
    }

}

function Counter() {

    const[state,dispatch] = useReducer(counterApp, initialState);



  return (
    <div>
        <button onClick={() => dispatch({type:"INCRE"})}>Increment</button>
        <p>counter: {state.count>0 ? state.count :0} </p>
        <button onClick={() => dispatch({type:"DECRE"})}>Decrement</button>
    </div>
  )
}

export default Counter