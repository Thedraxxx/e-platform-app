// import API from "@/src/http";
import API from "@/src/http";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { Status } from "../golbalTypes/types";
import { AppDispatch } from "../store";
import { setLoading } from "../ui/uiSlice";
import { IInitialState, ILoginData, IUserData } from "./userSlice.types";
const initialState: IInitialState = {
  user: {
    email: "",
    username: "",
    role: "",
  },
  status: Status.loading,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser(state: IInitialState, action: PayloadAction<IUserData>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser(state) {
      state.user = { email: "", username: "", role: "" };
      state.isAuthenticated = false;
      state.status = Status.loading;
    },
    setUserStatus(state: IInitialState, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  },
});
// login thunk
export function Login(data: ILoginData) {
  return async function userLoginThunk(dispatch: AppDispatch) {
    try {
      console.log("Triggering login with data:", data);
      dispatch(setLoading(true));
      const response = await API.post("users/login", data);
      const { statusCode, data: userData, message, success } = response.data;

      // console.log("API Response:", response.data);

      if (statusCode === 200 && success) {
        await AsyncStorage.setItem(
          "accessToken",
          userData.accessToken
        );
        Alert.alert("User logged in succussfully");
        dispatch(setUser(userData));
        dispatch(setUserStatus(Status.success));
      } else {
        Alert.alert("Login Failed", message || "Something went wrong");
        dispatch(setUserStatus(Status.error));
      }
    } catch (error: any) {
      console.log("Login error:", error);

      Alert.alert(
        "Login Error",
        error?.response?.data?.message ||
          error.message ||
          "Unexpected error occurred"
      );
      dispatch(setUserStatus(Status.error));
    } finally {
      dispatch(setLoading(false));
    }
  };
}
//logout thunk
export function Logout() {
  return async function logoutThunk(dispatch: AppDispatch) {
    try {
      dispatch(setLoading(true));
      const response = await API.post("users/logout");

      const { statusCode, message, success } = response.data;

      if (statusCode === 200 && success) {
        await AsyncStorage.removeItem("accessToken");
        dispatch(clearUser());
        Alert.alert("Success", message);
      } else {
        Alert.alert("Logout Failed ...Try again");
      }
    } catch (error: any) {
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

// export function Login(data: ILoginData) {
//   return async function userLoginThunk(dispatch: AppDispatch) {
//     try {
//       console.log("🔄 Attempting login with data:", data);

//       const url = "http://192.168.137.1:8000/api/v2/users/login";
//       console.log("🌐 Fetching URL:", url);

//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       console.log("📥 Raw response:", response);

//       const responseData = await response.json();
//       console.log("✅ Parsed response:", responseData);

//       if (response.ok && responseData.status === 200) {
//         console.log("🎉 Login success, setting user data...");
//         dispatch(setUser(responseData.data));
//         dispatch(setUserStatus(Status.success));
//       } else {
//         console.warn("⚠️ Login failed with message:", responseData.message);
//         Alert.alert("Login Failed", responseData.message || "Unknown error");
//         dispatch(setUserStatus(Status.error));
//       }
//     } catch (error: any) {
//       console.error("❌ Fetch error occurred:", error);
//       Alert.alert("Error", "Something went wrong with login.");
//       dispatch(setUserStatus(Status.error));
//     }
//   };
// }

export const { setUser, setUserStatus, clearUser } = authSlice.actions;

export default authSlice.reducer;
