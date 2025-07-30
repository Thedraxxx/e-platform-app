import { Logout } from "@/src/store/Auth/userSlice";
import { AppDispatch, RootState } from "@/src/store/store";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
 const router =  useRouter();
 const dispatch = useDispatch<AppDispatch>();
 const user = useSelector((state: RootState)=>state.auth.user)
 const isLoggedin = useSelector((state: RootState)=> state.auth.isAuthenticated)
 console.log("---------->",isLoggedin)
  const handleLogout = () => {
        if(isLoggedin === true){
              dispatch(Logout());
              console.log("----> user",user)
              router.replace("/")
               console.log("User logout vo hai")
        }
  };

  return (
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
  );
}
