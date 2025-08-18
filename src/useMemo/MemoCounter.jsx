import React, { useMemo, useState } from 'react'

function MemoCounter() {

    const [counter,setCounter] = useState(0);
    const [input,setInput] =useState(0);

    function expensiveCalculation(num) {
        console.log("inside expensive calculation")
        for(let i=0; i<1000000000; i++){};
        return num*2;   
    }


   //USEMEMO IS REACT HOOK THAT REMEMBERS THE REASULT OF A CALCULATION  AND ONLY RECALULATES IT WHEN THE DEPENCDECIES CHANAGE
   // ITS IS USED TO AVOID UNNECCESSARY WORK AND IMPROVE PERFORMANCE
   // EXPENSIVE CALCULATION ONLY RUN WHEN THE INPUT CHANAGES
   //USE MEMO TAKES A FUNCTION AND AN ARRAY OF DEPENDENCIES
   //IF DEPENDENCIES CHANGE, FUNCTION WILL BE EXCUTED AGAIN
    const double =useMemo(() => expensiveCalculation(input), [input])

    // const double = expensiveCalculation(input);

  return (
    <div className="memoCounter flex flex-col justify-around items-center mt-10 gap-4">
        <button onClick={() => setCounter(counter+1)}>Increment</button>
        <p>counter: {counter}</p>
        <input 
            type="number" 
            placeholder='Enter number'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border-2 border-amber-600 px-4 py-2 rounded-md"
        />
        <p>Double: {double}</p>
    </div>
  )
}

export default MemoCounter