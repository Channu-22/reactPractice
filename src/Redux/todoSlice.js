import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name : "todo",

    initialState: {
        input : "",
        tasks : [],
        isEditTask : false,
        isEditId : null
    },

    reducers :{
        setInput : function (state, action ){
            state.input = action.payload;
        },

        addTasks : function(state, action ){
            state.isEditTask ?  state.tasks =  state.tasks.map((task) => {
                return task.id == state.isEditId ? {...task, task:state.input} : task ;
            })
            :  
             (state.tasks = [...state.tasks, {id:Date.now(), task: state.input}]),
            state.input = ""
            state.isEditId =  null,
            state.isEditTask = false
        },

        deleteTask: function (state, action) {

            state.tasks = state.tasks.filter((id) => {
                return id.id !== action.payload;
            })

        },

        editTask: function (state, action){
            const task = state.tasks.find((obj) => {
                return obj.id == action.payload;
            })

            state.input = task.task ;
            state.isEditTask = true;
            state.isEditId = action.payload;
        }



    }

   
});

export const {setInput, addTasks,deleteTask, editTask} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;


