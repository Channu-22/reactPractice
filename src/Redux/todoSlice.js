import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name : "todo",

    initialState: {
        input : "",
        tasks : [],
        isEditTask : false,
    },

    reducers :{
        setInput : function (state, action ){
            state.input = action.payload;
        },

        addTasks : function(state, action ){
            state.tasks = [...state.tasks, {id:Date.now(), task: state.input}],
            state.input = ""
        }

    }

   
});

export const {setInput, addTasks} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;


