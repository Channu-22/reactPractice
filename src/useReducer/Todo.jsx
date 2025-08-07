import React, { useReducer } from 'react'
import { Pencil, Trash2 } from "lucide-react";


const initialState = {
    // id:Date.now(),
    input: "",
    tasks: [],
    isEditing: false,
    isEditId: null
}

function todoReducer(state, action) {

    switch (action.type) {
        case "SETINPUT":
            return {
                ...state, input: action.payload,
            };

        case "ADD_TASK":
            return state.isEditing
                ? {
                    ...state, tasks: state.tasks.map((task, idx) =>
                        idx === state.isEditId ? state.input : task
                    ),
                    /*

                    tasks: state.tasks.map((task, idx) =>
  idx === state.isEditId ? state.input : task
),

                    */
                    input: "",
                    isEditing: false,
                    isEditId: null

                }
                :
                {
                    ...state, tasks: [...state.tasks, state.input], input: "",
                };

        case "DELETE":
            return {
                ...state,
                tasks: state.tasks.filter((task, idex) =>
                    idex !== action.id
                )
            }

        case "EDIT_TASK":
            return {
                ...state,
                isEditing: true,
                input: action.payload,
                isEditId: action.id
            }

    }

}

function Todo() {

    const [state, dispatch] = useReducer(todoReducer, initialState);


    return (
        <div className='max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-md'>
            
            <input type="text" placeholder="Enter text"
                className="border-2 border-gray-300 hover:border-blue-500 rounded-lg mr-3 px-4 py-2 w-full"
                value={state.input}
                onChange={(e) => dispatch(
                    {
                        type: "SETINPUT",
                        payload: e.target.value
                    }
                )} />


            <button type="submit"
                className="px-5 py-2.5 mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer w-full"
                onClick={() => dispatch({ type: "ADD_TASK" })}>

                {
                    state.isEditing ? "EditTask" : "AddTask"
                }

            </button>
           
            <ul className="mt-6 space-y-3">
                {
                    state.tasks.map((task, index) => {
                        return <li key={index} className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-2xl">{
                            task}
                            <div className="flex gap-3">
                                <Trash2 className="text-red-500 hover:text-red-600 cursor-pointer"
                                    onClick={() => dispatch(
                                        {
                                            type: "DELETE",
                                            id: index,
                                        }
                                    )} />

                                <Pencil className="text-blue-500 hover:text-blue-600 cursor-pointer"
                                    onClick={() => dispatch(
                                        {
                                            type: "EDIT_TASK",
                                            id: index,
                                            payload: task
                                        }
                                    )} />
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Todo;
