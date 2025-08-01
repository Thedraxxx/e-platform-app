import { Login } from "@/src/store/Auth/userSlice";
import { ILoginData } from "@/src/store/Auth/userSlice.types";
import { useAppDispatch } from "@/src/store/hook";
import { RootState } from "@/src/store/store";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";
import { Button, IconButton, TextInput } from "react-native-paper";
import { useSelector } from "react-redux";

export default function SignIn() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const role = useSelector((state: RootState) => state.auth.user.role);
  const loading = useSelector((state: RootState) => state.ui.loading);
  
  const [data, setData] = useState<ILoginData>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (role === "institute") {
      router.replace("/role/(institute)");
    }else if(role === "student"){
      console.log("----")
      console.log("user ko state storeage--",user)
       router.replace("/role/(student)/dashboard")
    }
  }, [user]);

  const handleChange = (field: keyof ILoginData, value: string) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogin = () => {
    if (!data.email || !data.password) {
      console.log("--",user)
      Alert.alert("Error", "Please enter both email and password.");
      return;
    } 
    dispatch(Login(data));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
         showsVerticalScrollIndicator= {true}
      >
        <View className="flex-1 justify-center px-6 gap-3">
          {/* Back Button */}
          <IconButton
            icon="arrow-left"
            size={24}
            onPress={() => router.replace("/")}
            style={{ position: "absolute", top: 40, left: 10 }}
          />

          <Text className="text-2xl font-bold mb-4 text-center mt-4">Sign In</Text>

          {/* Email Input */}
          <TextInput
            label="Email"
            value={data.email}
            mode="outlined"
            onChangeText={(text) => handleChange("email", text)}
            keyboardType="email-address"
            autoCapitalize="none"
            className="my-2"
            style={{ fontSize: 14, height: 38}}
            left={<TextInput.Icon icon="email" />}
          />

          {/* Password Input with Eye Toggle */}
          <TextInput
            label="Password"
            value={data.password}
            mode="outlined"
            secureTextEntry={!showPassword}
            onChangeText={(text) => handleChange("password", text)}
            className="my-2"
            style={{ fontSize: 14, height: 38}}
            left={<TextInput.Icon icon="lock" />}
            right={
              <TextInput.Icon
                icon={showPassword ? "eye-off" : "eye"}
                onPress={() => setShowPassword((prev) => !prev)}
              />
            }
          />

          {/* Login Button */}
          <Button
            mode="contained"
            onPress={handleLogin}
            loading={loading}
            disabled={loading}
            style={{ paddingVertical: 6, borderRadius: 6 }}
            labelStyle={{ color: "#fff" }}
          >
            Log In
          </Button>

          {/* Register Redirect */}
          <Text className="text-center mt-3">
            If you do not have an account,{" "}
            <Text
              className="font-bold text-blue-500"
              onPress={() => router.push("/auth/register")}
            >
              Register
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}