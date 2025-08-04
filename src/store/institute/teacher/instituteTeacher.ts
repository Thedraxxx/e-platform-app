import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../../golbalTypes/types";
import { IInstTeacherInitialState, IteacherData } from "./inst-teacher-types";

const initialState: IInstTeacherInitialState = {
       teacherData:  {
             fullName: "",
             email: "",
             phoneNumber: "",
       },
       status: Status.loading
}
const instTeacherSlice = createSlice({
    name: "teacher",
    initialState: initialState,
    reducers: {
           setTeacherData(state: IInstTeacherInitialState,action: PayloadAction<IteacherData>){
                  state.teacherData = action.payload;
           },
           setTeacherStatus(state: IInstTeacherInitialState,action: PayloadAction<Status>){
                  state.status = action.payload
           }
    }
});

export const { setTeacherData, setTeacherStatus} = instTeacherSlice.actions
export default instTeacherSlice.reducer;

