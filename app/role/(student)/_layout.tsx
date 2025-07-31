import Drawer from "expo-router/drawer";

export default function StudentLayout(){
    return(
          <Drawer>
             <Drawer.Screen name="index" options={{title: "Student Home"}}/>
             <Drawer.Screen name="profile" options={{title: "profile"}}/>
             <Drawer.Screen name="dashboard" options={{title: "dashboards"}}/>
     </Drawer>
    )
}