import { Drawer } from 'expo-router/drawer';

export default function InstituteLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: 'dashboard' }} />
      <Drawer.Screen name='teachers' options={{title: "teacher"}}/>
      {/* Add more screens as needed */}
    </Drawer>
  );
}
