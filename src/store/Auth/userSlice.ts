import API from "@/src/http";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../golbalTypes/types";
import { AppDispatch } from "../store";
import { IInitialState, ILoginData, IUserData } from "./userSlice.types";
const initialState: IInitialState ={
    user: {
        email: '',
        token: '',
    },
    status: Status.loading
}

const authSlice =createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
          setUser(state: IInitialState,action:PayloadAction<IUserData>){
               state.user = action.payload
          },
          setUserStatus(state: IInitialState,action: PayloadAction<Status>){
                  state.status = action.payload
          }
    }
});

//login thunk
function Login(data: ILoginData){
    return async function userLoginThunk(dispatch: AppDispatch){
            try {
                 const response =  await API.post("users/login",data);
                 if(response.data.status === 200){
                    
                    dispatch(setUser(response.data.data));
                    dispatch(setUserStatus(Status.success));

                 }
                 else{
                    
                    dispatch(setUserStatus(Status.error))
                 }
            } catch (error) {
                dispatch(setUserStatus(Status.error))
            }
    }
}

export const {setUser,setUserStatus} = authSlice.actions;

export default authSlice.reducer;