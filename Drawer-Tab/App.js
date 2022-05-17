import React from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

import "react-native-gesture-handler";
import MyDrawer from "./navigation/MyDrawer";
import MyStack from "./navigation/MyStack";

export default function App() {
  return (
    <PaperProvider>
      <StatusBar backgroundColor="white" style="dark" />
      {/*משנה את צבע הסטטוס בר למעלה */}
      <NavigationContainer>
   <MyStack/>
      </NavigationContainer>
    </PaperProvider>
  );
}
