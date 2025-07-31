import { Logout } from "@/src/store/Auth/userSlice";
import { AppDispatch, RootState } from "@/src/store/store";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function StudentProfile(){
     const isLoggedin = useSelector((state: RootState)=> state.auth.isAuthenticated)
     const dispatch = useDispatch<AppDispatch>();
     const handleLogout = ()=>{
            if(isLoggedin){
                  dispatch(Logout());
                  router.replace("/");
            }
      }
      return(
            <View className="flex-1 justify-center items-center bg-white px-4">
                 <Text className="text-2xl font-semibold text-red-800 mb-6">
                   This is your Profile Page 
                 </Text>
                 <TouchableOpacity
                   onPress={handleLogout}
                   className="bg-red-600 px-6 py-3 rounded-xl shadow-md"
                 >
                   <Text className="text-white font-medium text-lg">Logout</Text>
                 </TouchableOpacity>
               </View>
      )
}