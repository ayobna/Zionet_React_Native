import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import { Init, AddNewPerson, SearchPerson } from "./database";
export default function App() {
  const [data, setData] = useState([]);

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();
  const [searchName, setSearchName] = useState();
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
      <StatusBar style="auto" />
      <View
        style={{
          marginTop: 40,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
   <View style={{ borderWidth:1,borderColor:'black'}}>
          <TextInput
            placeholder="Name"
            onChangeText={(name) => setName(name)}
          ></TextInput>
        </View>
        <View style={{ borderWidth:1,borderColor:'black'}}>
          <TextInput
            placeholder="Age"
            onChangeText={(age) => setAge(age)}
          ></TextInput>
        </View>
        <View style={{ borderWidth:1,borderColor:'black'}}>
          <TextInput
            placeholder="Address"
            onChangeText={(address) => setAddress(address)}
          ></TextInput>
        </View>
      </View>
      <View style={{width:"20%" ,marginTop:10 , borderWidth:1,borderColor:'black'}}>
        <Button
          title="Add Item"
          onPress={() =>
            AddNewPerson(name, age, address)
              .then((result) => {
                console.log(result);
              })
              .catch(() => {
                console.log("insert Item fail");
              })
          }
        ></Button>
      </View>
      <View
        style={{
          margin: "10%",
          justifyContent: "center",
          alignItems: "center",
          borderWidth:1,borderColor:'black'
        }}
      >
        <TextInput
          placeholder="SearchPerson"
          onChangeText={(address) => setSearchName(address)}
        ></TextInput>
      </View>
      <View style={{marginRight:50 ,marginLeft:50 ,justifyContent:'center', borderWidth:1,borderColor:'black'}}>
        <Button
          title="Search Person"
          onPress={() =>
            SearchPerson(searchName)
              .then((result) => {
                console.log(result.rows._array);
                setData(result.rows._array);
              })
              .catch(() => {
                console.log(" Select All fail");
              })
          }
        ></Button>
      </View>
      <ScrollView>
        {data.map((X) => {
          return (
            <View key={X.ID}>
              <Text>ID: {X.ID}</Text>
              <Text>Name: {X.Name}</Text>
              <Text>Age: {X.Age}</Text>
              <Text>Address: {X.Address}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //  alignItems: "center",
    //  justifyContent: "center",
  },
});
