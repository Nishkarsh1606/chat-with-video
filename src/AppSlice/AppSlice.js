import { createSlice } from "@reduxjs/toolkit";

export const appSlice=createSlice({
    name:'app',
    initialState:{
        currentChannel:''
    },
    reducers:{
        selectChannel:(state,action)=>{
            state.currentChannel=action.payload
        }
    }
})
export const {selectChannel}=appSlice.actions
export const selectedChannel=(state)=>state.app.currentChannel
export default appSlice.reducer