import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoading } from "./ui-slice-types";

const initialState: ILoading ={
     loading: false
}
const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
         setLoading: (state: ILoading,action: PayloadAction<boolean>)=>{
              state.loading = action.payload
         }
    }
})
export const {setLoading} = uiSlice.actions;
export default uiSlice.reducer