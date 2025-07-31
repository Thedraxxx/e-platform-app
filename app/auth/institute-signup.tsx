import { IInstituteRegister } from '@/src/store/Auth/userSlice.types';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Button, IconButton, Text, TextInput } from 'react-native-paper';

const InstituteForm = () => {
  const router = useRouter();
  const [form, setForm] = React.useState<IInstituteRegister>({
    instituteName: '',
    instituteEmail: '',
    institutePhoneNumber: '',
    instituteAddress: '',
    institutePanNo: ''
  });

  const [loading, setLoading] = React.useState(false);

  const handleChange = (key: keyof IInstituteRegister, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (!form.instituteName || !form.instituteEmail || !form.institutePhoneNumber || !form.instituteAddress || !form.institutePanNo) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    setLoading(true);
    // Handle form submission here
    console.log('Form submitted:', form);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Success", "Institute created successfully!");
    }, 1500);
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

          <Text className="text-2xl font-bold mb-4 text-center">Create Institute</Text>

          {/* Institute Name */}
          <TextInput
            label="Institute Name"
            value={form.instituteName}
            mode="outlined"
            onChangeText={text => handleChange('instituteName', text)}
            className="my-2"
            style={{ fontSize: 14, height: 38 }}
            left={<TextInput.Icon icon="office-building" />}
          />

          {/* Institute Email */}
          <TextInput
            label="Institute Email"
            value={form.instituteEmail}
            keyboardType="email-address"
            mode="outlined"
            onChangeText={text => handleChange('instituteEmail', text)}
            className="my-2"
            style={{ fontSize: 14, height: 38 }}
            left={<TextInput.Icon icon="email" />}
          />

          {/* Phone Number */}
          <TextInput
            label="Phone Number"
            value={form.institutePhoneNumber}
            keyboardType="phone-pad"
            mode="outlined"
            onChangeText={text => handleChange('institutePhoneNumber', text)}
            className="my-2"
            style={{ fontSize: 14, height: 38 }}
            left={<TextInput.Icon icon="phone" />}
          />

          {/* Address */}
          <TextInput
            label="Address"
            value={form.instituteAddress}
            mode="outlined"
            onChangeText={text => handleChange('instituteAddress', text)}
            className="my-2"
            style={{ fontSize: 14, height: 38 }}
            left={<TextInput.Icon icon="map-marker" />}
          />

          {/* PAN Number */}
          <TextInput
            label="PAN Number"
            value={form.institutePanNo}
            mode="outlined"
            onChangeText={text => handleChange('institutePanNo', text)}
            className="my-2"
            style={{ fontSize: 14, height: 38 }}
            left={<TextInput.Icon icon="card-account-details" />}
          />

          {/* Submit Button */}
          <Button
            mode="contained"
            onPress={handleSubmit}
            loading={loading}
            disabled={loading}
            style={{ paddingVertical: 6, borderRadius: 6, marginTop: 8 }}
            labelStyle={{ color: "#fff" }}
          >
            Create Institute
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default InstituteForm;