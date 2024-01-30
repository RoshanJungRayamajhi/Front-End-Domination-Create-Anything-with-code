import { createSlice } from "@reduxjs/toolkit";



const tvshowslice = createSlice({
    name:"tvshow",
    initialState:{
        tvshow:null,
    },
    reducers:{
        addtvshow: (state,action)=>{
            state.tvshow = action.payload;
        },
        removetvshow:(state,action)=>{
            state.trending = null;
        }
    }
})
export const {addtvshow,removetvshow} = tvshowslice.actions
export default tvshowslice.reducer