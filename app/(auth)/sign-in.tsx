import { Login } from "@/src/store/Auth/userSlice";
import { ILoginData } from "@/src/store/Auth/userSlice.types";
import { AppDispatch, RootState } from "@/src/store/store";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
export default function SignIn() {

    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState)=>state.auth.user);
    const loading = useSelector((state: RootState)=>state.ui.loading);
     useEffect(()=>{
        console.log("state ma basyo :",user)    
     },[user])
       const router = useRouter()
     const [data,setData] = useState<ILoginData>({
      email: '',
      password: "",
     })
     const handleChange = (feild: keyof ILoginData,value: string)=>{
           setData(prev=>({
            ...prev,
            [feild]: value
           }))
     }

  const handleLogin = () => {
    if (!data.email || !data.password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }
    //  console.log("data of the user:",data)
    dispatch(Login(data));
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-2xl font-bold mb-6 text-center">Sign In</Text>

      <TextInput
        placeholder="Email"
        value={data.email}
        onChangeText={(text)=>{handleChange("email",text)}}
        keyboardType="email-address"
        autoCapitalize="none"
        className="border border-gray-300 p-3 rounded mb-4"
      />

      <TextInput
        placeholder="Password"
        value={data.password}
        onChangeText={(text)=>{handleChange("password",text)}}
        secureTextEntry
        className="border border-gray-300 p-3 rounded mb-6"
      />

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-blue-500 py-3 rounded"
      >{
        loading ? (
           <ActivityIndicator color="#fff"/>
        ): (
              <Text className="text-white text-center font-medium">Log In</Text>
        )
      }
       
      </TouchableOpacity>
      <Text className="text-center mt-3">If you do not have account,{""} <Text className="font-bold text-blue-500" onPress={()=>{router.push("/(auth)/register")}}>Register</Text></Text>
    </View>
  );
}
