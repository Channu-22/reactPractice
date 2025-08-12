import { useDispatch, useSelector } from "react-redux"
import { setInput,addTasks,deleteTask, editTask } from "./todoSlice";
import {Edit, Trash2} from "lucide-react"
 
function App() {

    
    const dispatch = useDispatch();
    const initState = useSelector((state) => {
      return state.todo;
    })

  return (
    <div className="w-96 m-auto mt-4">

      <input type="text" 
        placeholder="Enter your task"

        value={initState.input}
        onChange={(e) => dispatch(setInput(e.target.value))}
      />

        <button onClick={() => dispatch(addTasks())}>{initState.isEditTask ? "Edit Task " : "Add Task"}</button>

        <ul>
         {
          initState.tasks.map((obj) => {
            return <li key={obj.id} className="flex justify-around items-center mt-2">{obj.task}
             <Trash2  onClick={() => dispatch(deleteTask(obj.id))}/>
             <Edit  onClick={() => dispatch(editTask(obj.id))}/>

            </li>
           
          })
         }
        </ul>
      
    </div>
  )
}

export default App