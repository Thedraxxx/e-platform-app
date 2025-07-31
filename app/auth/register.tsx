import { Login, Register } from "@/src/store/Auth/userSlice";
import { ILoginData, IRegisterData } from "@/src/store/Auth/userSlice.types";
import { AppDispatch, RootState } from "@/src/store/store";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";
import { Button, IconButton, TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

export default function RegisterUser() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);
  const loading = useSelector((state: RootState) => state.ui.loading);

  const [data, setData] = useState<IRegisterData>({
    username: "",
    email: "",
    password: "",
  });
  useEffect(()=>{
       console.log("----> state ma xa hai register vako data", user)
  },[user])

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field: keyof IRegisterData, value: string) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

 const handleRegister = async () => {
  if (!data.username || !data.email || !data.password) {
    Alert.alert("Error", "Please fill in all fields.");
    return;
  }

  try {
    // Wait for registration to finish
    await dispatch(Register(data));

    // After successful registration, proceed to login
    const loginData: ILoginData = {
      email: data.email,
      password: data.password,
    };

    await dispatch(Login(loginData));

    // Navigate only after login is successful
    router.replace("/role/(student)/dashboard");
  } catch (error: any) {
    console.error("Register/Login Error:", error);
    Alert.alert("Error", error?.message || "Registration/Login failed.");
  }
};


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 justify-center px-6 gap-3">
          {/* Back Button */}
          <IconButton
            icon="arrow-left"
            size={24}
            onPress={() => router.replace("/")}
            style={{ position: "absolute", top: 40, left: 10 }}
          />

          <View className="items-center mb-4">
            <Text className="text-2xl font-bold">Create Account</Text>
            <Text className="text-gray-500 text-sm mt-1">
              Join us and explore your potential
            </Text>
          </View>

          {/* Username Input */}
          <TextInput
            label="Username"
            value={data.username}
            mode="outlined"
            onChangeText={(text) => handleChange("username", text)}
            autoCapitalize="none"
            className="my-2"
            style={{ fontSize: 14, height: 38 }}
            left={<TextInput.Icon icon="account" />}
          />

          {/* Email Input */}
          <TextInput
            label="Email"
            value={data.email}
            mode="outlined"
            onChangeText={(text) => handleChange("email", text)}
            keyboardType="email-address"
            autoCapitalize="none"
            className="my-2"
            style={{ fontSize: 14, height: 38 }}
            left={<TextInput.Icon icon="email" />}
          />

          {/* Password Input */}
          <TextInput
            label="Password"
            value={data.password}
            mode="outlined"
            onChangeText={(text) => handleChange("password", text)}
            secureTextEntry={!showPassword}
            className="my-2"
            style={{ fontSize: 14, height: 38 }}
            left={<TextInput.Icon icon="lock" />}
            right={
              <TextInput.Icon
                icon={showPassword ? "eye-off" : "eye"}
                onPress={() => setShowPassword((prev) => !prev)}
              />
            }
          />

          {/* Register Button */}
          <Button
            mode="contained"
            onPress={handleRegister}
            loading={loading}
            disabled={loading}
            style={{ paddingVertical: 6, borderRadius: 6, marginTop: 8 }}
            labelStyle={{ color: "#fff" }}
          >
            Register
          </Button>

          {/* Login Redirect */}
          <Text className="text-center mt-3">
            Already have an account?{" "}
            <Text
              className="font-bold text-blue-500"
              onPress={() => router.replace("/auth/sign-in")}
            >
              Login
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}