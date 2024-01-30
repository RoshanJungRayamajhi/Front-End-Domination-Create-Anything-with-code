import { createSlice } from "@reduxjs/toolkit";



const peopleslice = createSlice({
    name:"people",
    initialState:{
        people:null,
    },
    reducers:{
        addpeople: (state,action)=>{
            state.people = action.payload;
        },
        removepeople:(state,action)=>{
            state.trending = null;
        }
    }
})
export const {addpeople, removepeople} = peopleslice.actions
export default peopleslice.reducer