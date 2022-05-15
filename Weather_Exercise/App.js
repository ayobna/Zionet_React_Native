import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Alert ,Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { _storeData } from "./utils/Functions";
import { Provider as PaperProvider, Searchbar ,Card } from "react-native-paper";
import axios from "axios";
export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const [data, setData] = useState([])
  const api =
    "https://api.weatherapi.com/v1/current.json?key=0b9fe350d38644b0a4193829221505&q=";
  const onChangeSearch =  (query) => {
    setSearchQuery(query);
    console.log(query);
  };
  const getWeather =   () => {console.log("999")

    axios.get(api + `` + searchQuery).then((response) => {
      ;
      //console.log(data)
      const tempData = [ ...data,response.data];
      setData(tempData);
    });
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Searchbar
          placeholder="חיפוש"
          onChangeText={onChangeSearch}
          value={searchQuery}
      
          onIconPress={getWeather}
         // onPressOut={getWeather}
       //   onKeyPress={getWeather}
        />
        <View style={styles.container}>
          <ScrollView
    
          >
        
            {
           data.length>0&&  data.map((item, index) => {
              {    console.log("999999999999999999999",item.location.country)}
              return (
                <Card key={index}>
                  <Card.Title
                    title={item.location.name}
    
                   subtitle={item.location.country}
                   
                  />
                    <Card.Cover source={{ uri: 'https:'+ item.current.condition.icon }} />
                </Card>
                  )})
                
              }
          </ScrollView>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
