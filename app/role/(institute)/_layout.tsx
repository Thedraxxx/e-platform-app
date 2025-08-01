import { Drawer } from 'expo-router/drawer';

export default function InstituteLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: 'dashboard' }} />
      <Drawer.Screen name="teacher" options={{ title: 'teacher' }} />
      <Drawer.Screen name="student" options={{ title: 'Student' }} />
      <Drawer.Screen name="course" options={{ title: 'course' }} />
      <Drawer.Screen name="category" options={{ title: 'category' }} />
      <Drawer.Screen name="profile" options={{ title: 'Profile' }} />
     

      {/* Add more screens as needed */}
    </Drawer>
  );
}
