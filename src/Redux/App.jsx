import { useDispatch, useSelector } from "react-redux"
import { setInput,addTasks } from "./todoSlice";

function App() {

    
    const dispatch = useDispatch();
    const initState = useSelector((state) => {
      return state.todo;
    })

  return (
    <div>

      <input type="text" 
        placeholder="Enter your task"

        value={initState.input}
        onChange={(e) => dispatch(setInput(e.target.value))}
      />

        <button onClick={() => dispatch(addTasks())}>addTask</button>

        <ul>
         {
          initState.tasks.map((obj) => {
            return <li key={obj.id}>{obj.task}</li>
          })
         }
        </ul>
      
    </div>
  )
}

export default App