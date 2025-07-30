import { Drawer } from 'expo-router/drawer';

export default function InstituteLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: 'Institute Home' }} />
      <Drawer.Screen name="profile" options={{ title: 'Profile' }} />
      <Drawer.Screen name="news" options={{ title: 'News' }} />

      {/* Add more screens as needed */}
    </Drawer>
  );
}
