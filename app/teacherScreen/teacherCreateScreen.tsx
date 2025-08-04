import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { IconButton } from 'react-native-paper';

const TeacherModal = () => {
  const router = useRouter();

  const [teacherData, setTeacherData] = useState({
    teacherName: '',
    teacherEmail: '',
    teacherPhoneNumber: '',
    teacherExperience: '',
    teacherJoinedDate: '',
    teacherSalary: '',
    courseId: '',
    teacherPhoto: null,
  });

  const [courses] = useState([
    { _id: '1', courseName: 'React Native' },
    { _id: '2', courseName: 'Node.js' },
  ]);

  const handleChange = (field: string, value: string) => {
    setTeacherData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = async () => {
    // Handle image picker
  };

  const handleSubmit = () => {
    // Submit logic
    console.log(teacherData);
  };

  return (
    <ScrollView className="flex-1 bg-gray-50 p-5">
      <View className="flex-row items-center mb-6">
        <IconButton
          icon="arrow-left"
          size={24}
          onPress={() => router.replace('/role/(institute)/teacher')}
          className="m-0"
        />
        <Text className="text-xl font-bold ml-3 text-gray-800">Add Teacher</Text>
      </View>

      <View className="space-y-4">
        <TextInput
          placeholder="Full Name"
          className="bg-white p-4 rounded-xl border border-gray-200 text-gray-800"
          value={teacherData.teacherName}
          onChangeText={(text) => handleChange('teacherName', text)}
        />

        <TextInput
          placeholder="Email"
          className="bg-white p-4 rounded-xl border border-gray-200 text-gray-800"
          value={teacherData.teacherEmail}
          onChangeText={(text) => handleChange('teacherEmail', text)}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Phone"
          className="bg-white p-4 rounded-xl border border-gray-200 text-gray-800"
          value={teacherData.teacherPhoneNumber}
          onChangeText={(text) => handleChange('teacherPhoneNumber', text)}
          keyboardType="phone-pad"
        />

        <TextInput
          placeholder="Experience (years)"
          className="bg-white p-4 rounded-xl border border-gray-200 text-gray-800"
          value={teacherData.teacherExperience}
          onChangeText={(text) => handleChange('teacherExperience', text)}
          keyboardType="numeric"
        />

        <TextInput
          placeholder="Joined Date (YYYY-MM-DD)"
          className="bg-white p-4 rounded-xl border border-gray-200 text-gray-800"
          value={teacherData.teacherJoinedDate}
          onChangeText={(text) => handleChange('teacherJoinedDate', text)}
        />

        <TextInput
          placeholder="Salary"
          className="bg-white p-4 rounded-xl border border-gray-200 text-gray-800"
          value={teacherData.teacherSalary}
          onChangeText={(text) => handleChange('teacherSalary', text)}
          keyboardType="numeric"
        />

        <Text className="font-semibold text-gray-700">Course</Text>
        <View className="bg-white rounded-xl overflow-hidden mb-4">
          <Picker
            selectedValue={teacherData.courseId}
            onValueChange={(itemValue) => handleChange('courseId', itemValue)}
          >
            <Picker.Item label="Select course" value="" />
            {courses.map((course) => (
              <Picker.Item key={course._id} label={course.courseName} value={course._id} />
            ))}
          </Picker>
        </View>

        <TouchableOpacity 
          className="bg-gray-100 p-4 rounded-xl items-center"
          onPress={handleImageUpload}
        >
          <Text className="font-semibold text-gray-600">Upload Photo</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-between mt-8">
        <TouchableOpacity 
          className="flex-1 bg-gray-200 p-4 mx-2 rounded-xl items-center"
          onPress={() => router.back()}
        >
          <Text className="font-semibold text-gray-700">Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          className="flex-1 bg-indigo-600 p-4 mx-2 rounded-xl items-center"
          onPress={handleSubmit}
        >
          <Text className="font-semibold text-white">Create</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default TeacherModal;