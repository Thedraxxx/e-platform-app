import { store } from "@/src/store/store";
import { Slot } from "expo-router";
import { Provider } from "react-redux";
import "../global.css";

export default function RootLayout() {
  return (
   <Provider store={store}>
     <Slot/>
  </Provider>
  );
}
