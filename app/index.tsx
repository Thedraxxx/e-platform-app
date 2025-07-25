import Navbar from "@/src/components/layout/navbar";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
    <Navbar/>
      <Text className="text-red-800">THis is a home page.</Text>
     </View>
  );
}
