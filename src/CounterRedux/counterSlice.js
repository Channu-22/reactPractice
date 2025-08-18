import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",

    initialState: {
        counter: 0
    },

    reducers : {
        Increment : function (state,action){
            state.counter = state.counter + 1;
        },

        Decrement : function (state, action) {
            state.counter = state.counter - 1;
        }
    },

});

export const {Increment, Decrement } = counterSlice.actions;

export const counterReducer = counterSlice.reducer; 