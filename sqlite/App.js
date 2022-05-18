import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import { Button, StyleSheet, Text, View, ScrollView } from "react-native";
import { Init, AddNewItem, SelectAll } from "./database";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Init()
      .then(() => {
        console.log("Db created well");
      })
      .catch(() => {
        console.log("Db created fail");
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        title="Add Item"
        onPress={() =>
          AddNewItem("cola", 10)
            .then((result) => {
              console.log(result);
            })
            .catch(() => {
              console.log("insert Item fail");
            })
        }
      ></Button>
      <Button
        title="Select All"
        onPress={() =>
          SelectAll()
            .then((result) => {
              console.log(result.rows._array);
              setData(result.rows._array)
            })
            .catch(() => {
              console.log(" Select All fail");
            })
        }
      ></Button>
      <ScrollView>
        {data.map((X)=>{
          return (
            <View key={X.ID}>
              <Text>
                {X.ID}
              </Text>
            </View>
          )
        })}
      </ScrollView>
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
