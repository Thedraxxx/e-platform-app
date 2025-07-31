import { RootState } from "@/src/store/store";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function Index() {
    const {username, email} = useSelector((state: RootState)=> state.auth.user )
  return (
     <View>
      <Text className="text-red-800">THis is a student . His name is {username} and his email is {email}</Text>
     </View>
  );
}
