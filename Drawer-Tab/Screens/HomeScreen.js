import react, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.container}>
          <Button
            mode="contained"
            onPress={() => {
              navigation.navigate("MyDrawer");
            }}
          >
            Drawer
          </Button>
        </View>
        <View style={styles.container}>
     <Button
            mode="contained"
            onPress={() => {
              navigation.navigate("MyTabs");
            }}
          >
            Tab
          </Button>     
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ViewBtn: {
    width: 100,
  },
  btn: {
    width: 100,
  },
});

export default HomeScreen;
