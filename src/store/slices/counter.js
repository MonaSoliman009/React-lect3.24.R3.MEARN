import { createSlice } from "@reduxjs/toolkit";





const counterSlice=createSlice({
    name: "counter",
    initialState: {counter:0},
    reducers: {
        increaseCounter(state) {
            state.counter = state.counter + 1
        },
        decreaseCounter(state) {
            state.counter= state.counter - 1
        }
    },
})



export const {increaseCounter , decreaseCounter}=counterSlice.actions
export default counterSlice.reducer