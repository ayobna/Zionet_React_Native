import React from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import paperTheme from "./utils/PaperTheme";

import "react-native-gesture-handler";
import MyDrawer from "./navigation/MyDrawer";

export default function App() {
  return (
    <PaperProvider>
      <StatusBar backgroundColor="white" style="dark" />
      {/*משנה את צבע הסטטוס בר למעלה */}
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </PaperProvider>
  );
}
