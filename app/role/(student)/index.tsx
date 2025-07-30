import Navbar from "@/src/components/layout/navbar";
import { Text, View } from "react-native";

export default function Student() {
  return (
    <View>
     <Navbar/>
      <Text className="text-red-800">THis is a student page.</Text>
     </View>
  );
}
