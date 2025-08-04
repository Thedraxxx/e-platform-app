import { Drawer } from 'expo-router/drawer';

export default function InstituteLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: 'dashboard' }} />
      {/* Add more screens as needed */}
    </Drawer>
  );
}
