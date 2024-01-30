// resultReducer.js
import { createSlice } from "@reduxjs/toolkit";

export const resultReducer = createSlice({
  name: 'result',
  initialState: {
    userId: null,
    result: []
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    pushResultAction: (state, action) => {
      state.result.push(action.payload)
    },
    updateResultAction:(state,action)=>{
      const { trace ,checked} = action.payload
      console.log(trace,"inside reducer")
      state.result.fill(checked,trace,trace+1)
      console.log(state.result,"idi rresult inside reducer")
      console.log("completed update")

    },
    resetResultAction:()=>{
      return{
        userId: null,
        result: []
      }
    }
  },
});

export const { setUserId, pushResultAction,resetResultAction,updateResultAction } = resultReducer.actions;

export default resultReducer.reducer;
