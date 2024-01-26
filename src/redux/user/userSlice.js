import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    isAuthenticated:false,
    currentUser:null
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        authSuccess:(state)=>{
            state.isAuthenticated = true
        },
        authFailure:(state)=>{
            state.isAuthenticated = false
        }
        
    }
})
export const {authSuccess,authFailure} = userSlice.actions
export default userSlice.reducer
