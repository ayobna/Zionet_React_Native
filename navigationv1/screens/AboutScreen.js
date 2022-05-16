import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
function AboutScreen(props) {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text> country:{route.params.location.country}</Text>
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
});
export default AboutScreen;
