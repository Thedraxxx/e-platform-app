import API from "@/src/http";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { Status } from "../golbalTypes/types";
import { AppDispatch } from "../store";
import { setLoading } from "../ui/uiSlice";
import { IInstituteInitialState, IInstituteUserInfo, IInsttituteRegister } from "./institute-type";

const InitialState: IInstituteInitialState = {
  user: {
    instituteName: "",
    instituteEmail: "",
    institutePhoneNumber: "",
    instituteAddress: "",
  },
  status: Status.loading,
};

const instituteSlice = createSlice({
  name: "institute",
  initialState: InitialState,
  reducers: {
    setInstituteInfo(
      state: IInstituteInitialState,
      action: PayloadAction<IInstituteUserInfo>
    ) {state.user = action.payload},
    clearInstitute(state){
        state.user = {
         instituteAddress : "",
         instituteEmail : "",
         instituteName : "",
        institutePhoneNumber : "",
        };
        state.status = Status.loading;
       },
    setInstituteStatus(state: IInstituteInitialState, action: PayloadAction<Status>){
         state.status = action.payload;
    }
  },
});
export function createInstitute(data: IInsttituteRegister){
   return async function createInstituteThunk(dispatch: AppDispatch){
                 try {
                     const response = await API.post("institute/createInstitute",data);
                     const { statusCode, data: userData, message } = response.data;
                     console.log("response ma ako --->",response.data)
                      if(statusCode === 201 && response.data.success){
                         
                         dispatch(setInstituteInfo(data));
                         dispatch(setInstituteStatus(Status.success));
                         
                         Alert.alert("Institute ----> ", message);
                         console.log("user ko data ho inst ko: ",userData)
                      }else{
                        dispatch(setInstituteStatus(Status.error))
                      }
                 }catch (error: any) {
                       console.log("Logout error:", error);
                       Alert.alert(
                         "Error",
                         error?.response?.data?.message || "Unexpected logout error"
                       );
                     } finally {
                       dispatch(setLoading(false));
                     }
                   };
   }

export const { setInstituteInfo, clearInstitute, setInstituteStatus} = instituteSlice.actions;
export default instituteSlice.reducer;