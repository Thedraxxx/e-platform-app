import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

export default function InstituteDashboard() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-5 pt-12">
      {/* Top Bar with Profile */}
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-2xl font-bold text-gray-800">
          👋 Welcome, Admin
        </Text>
        <Pressable onPress={() => router.push("/role/(institute)/profile")}>
          <Ionicons name="person-circle-outline" size={34} color="#4B5563" />
        </Pressable>
      </View>

      {/* Dashboard Cards */}
      <View className="space-y-4">
        <TouchableOpacity
          className="bg-gray-100 p-5 rounded-2xl shadow-sm"
          onPress={() => router.push("/role/(institute)/teacher")}
        >
          <View className="flex-row items-center space-x-3">
            <MaterialIcons name="people" size={24} color="#1f2937" />
            <View>
              <Text className="text-lg font-semibold text-gray-800">
                Manage Teachers
              </Text>
              <Text className="text-sm text-gray-500">
                Add, edit, or remove teachers
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-gray-100 p-5 rounded-2xl shadow-sm"
          onPress={() => router.push("/role/(institute)/student")}
        >
          <View className="flex-row items-center space-x-3">
            <FontAwesome5 name="user-graduate" size={20} color="#1f2937" />
            <View>
              <Text className="text-lg font-semibold text-gray-800">
                Manage Students
              </Text>
              <Text className="text-sm text-gray-500">
                Add, assign or monitor students
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-gray-100 p-5 rounded-2xl shadow-sm"
          onPress={() => router.push("/role/(institute)/course")}
        >
          <View className="flex-row items-center space-x-3">
            <Ionicons name="book-outline" size={22} color="#1f2937" />
            <View>
              <Text className="text-lg font-semibold text-gray-800">
                Manage Courses
              </Text>
              <Text className="text-sm text-gray-500">
                Create and update courses
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-gray-100 p-5 rounded-2xl shadow-sm"
          onPress={() => router.push("/role/(institute)/category")}
        >
          <View className="flex-row items-center space-x-3">
            <MaterialIcons name="category" size={22} color="#1f2937" />
            <View>
              <Text className="text-lg font-semibold text-gray-800">
                Manage Categories
              </Text>
              <Text className="text-sm text-gray-500">
                Organize course categories
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
