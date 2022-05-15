import { StatusBar } from "expo-status-bar";
import React ,{useState} from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([])
  const url =
    "https://savehttp-6bd97-default-rtdb.firebaseio.com/TableLinks.json";
  return (
    <View style={styles.container}>
      <Text>FireBase!</Text>
      <StatusBar style="auto" />
      <View>
        <Button
          title="Save on Record"
          onPress={() => {
            const j = { name: "avi", id: "123", link: "asda5afds" };
            axios
              .post(url, j)
              .then((res) => {
                console.log(res.data);
                
             
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        />
      </View>
      <View>
        <Button
          title="get all"
          onPress={() => {
            axios
              .get(url)
              .then((res) => {
                console.log(res.data);
               // setData(res.data)
              //  for (const [key, value] of Object.entries(object1)) {
              //   console.log(`${key}: ${value}`);
              // }
              
            
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        />
      </View>
      <View>
        <Button
          title="Delete"
          onPress={() => {
      
            axios
              .delete(    "https://savehttp-6bd97-default-rtdb.firebaseio.com/TableLinks/-N26QbULwDzsLxUOR1IL.json/")
              .then((res) => {
                console.log(res.data);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        />
      </View>
      <View>
        <Button
          title="Update Full"
          onPress={() => {
            //remove and insert new
            const j = { name: "avi", id: "123", link: "asda5afds" };
            axios
              .put(    "https://savehttp-6bd97-default-rtdb.firebaseio.com/TableLinks/-N26Q238nE6ZYADewbfp.json/",j)
              .then((res) => {
                console.log(res.data);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        />
      </View>
      <View>
        <Button
          title="Update partial"
          onPress={() => {
            //find update
            const j = { name: "ayoub", };   
            axios
              .patch(    "https://savehttp-6bd97-default-rtdb.firebaseio.com/TableLinks/-N26Q238nE6ZYADewbfp.json/",j)
              .then((res) => {
                console.log(res.data);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        />
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
});
