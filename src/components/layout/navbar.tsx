import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Navbar() {
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between px-4 py-4 bg-white border-b border-gray-200">
      {/* App Title on the Left */}
     <TouchableOpacity onPress={()=>{router.push("/")}}>
            <Image
    source={require('../../../assets/images/favicon.png')}
    style={{ width: 40, height: 40 }}
  />
     </TouchableOpacity>

      {/* Navigation Buttons on the Right */}
      <View className="flex-row space-x-2 gap-1"> 
        <TouchableOpacity
          className="px-3 py-1 rounded bg-gray-200"
          onPress={() => router.push("/auth/sign-in")}
        >
          <Text className="text-gray-700 text-sm">Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="px-3 py-1 rounded bg-gray-200"
          onPress={() => router.push("/auth/institute-signup")}
        >
          <Text className="text-gray-700 text-sm">Become Institute</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
