import { Slot } from "expo-router";
import { SafeAreaView, View } from "react-native";

export default function DashboardLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Slot />
      </View>
    </SafeAreaView>
  );
}
