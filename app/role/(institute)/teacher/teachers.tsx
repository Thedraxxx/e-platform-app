import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { Button } from "react-native-paper";

const mockTeachers = [
  {
    id: "1",
    name: "Ram Prasad",
    phone: "9800000001",
    email: "ram@example.com",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    salary: "Rs. 40,000",
    course: "Mathematics",
  },
  {
    id: "2",
    name: "Sita Devi",
    phone: "9800000002",
    email: "sita@example.com",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    salary: "Rs. 38,000",
    course: "Science",
  },
  {
    id: "3",
    name: "Hari Bahadur",
    phone: "9800000003",
    email: "hari@example.com",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    salary: "Rs. 42,000",
    course: "English",
  },
];

export default function InstituteTeacher() {
  const router = useRouter();

  const handlePress = () => {
    router.push("/teacherScreen/teacherCreateScreen");
  };

  const renderItem = ({ item }: { item: any }) => (
    <View className="flex-row items-center bg-white rounded-2xl p-4 mb-3 border border-gray-200 shadow-sm">
      <Image
        source={{ uri: item.photo }}
        className="w-14 h-14 rounded-full mr-4"
      />
      <View className="flex-1">
        <Text className="text-lg font-semibold text-gray-900">
          {item.name}
        </Text>
        <Text className="text-sm text-gray-500 mt-1">
          {item.phone} | {item.email}
        </Text>
        <Text className="text-sm text-gray-500 mt-1">
          {item.course} • {item.salary}
        </Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-50 px-4 pt-6">
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-2xl font-bold text-gray-800">Teachers</Text>
        <Button
          mode="contained"
          buttonColor="#1E293B"
          contentStyle={{ paddingHorizontal: 12 }}
          labelStyle={{ color: "white", fontWeight: "600" }}
          onPress={handlePress}
        >
          + Add
        </Button>
      </View>

      <FlatList
        data={mockTeachers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
