
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function InstituteTeacher() {
   const router = useRouter();
         const handlePress= (()=>{
                 router.push("/teacherScreen/teacherCreateScreen")
         })
  return (
    <View>
         <Text className="text-red-800">THis is a institute teacher page</Text>
         <Button buttonColor="black" className="w-auto" onPress={handlePress}>create teacher</Button>
     </View>
  );
}
