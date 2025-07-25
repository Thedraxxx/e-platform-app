import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
export default function SignIn() {
      const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }
    Alert.alert("Login", `Email: ${email}\nPassword: ${password}`);
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-2xl font-bold mb-6 text-center">Sign In</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        className="border border-gray-300 p-3 rounded mb-4"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="border border-gray-300 p-3 rounded mb-6"
      />

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-blue-500 py-3 rounded"
      >
        <Text className="text-white text-center font-medium">Log In</Text>
      </TouchableOpacity>
      <Text className="text-center mt-3">If you do not have account,{""} <Text className="font-bold text-blue-500" onPress={()=>{router.push("/auth/register")}}>Register</Text></Text>
    </View>
  );
}
