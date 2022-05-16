import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Alert, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Provider as PaperProvider,
  Searchbar,
  Card,
  Button,
  Avatar
} from "react-native-paper";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
function WeatherScreen() {
    const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  const [data, setData] = useState([]);
  const api =
    "https://api.weatherapi.com/v1/current.json?key=0b9fe350d38644b0a4193829221505&q=";
  const onChangeSearch = (query) => {
    setSearchQuery(query);
   
  };
  const getWeather = () => {


 try{   axios.get(api + `` + searchQuery).then((response) => {
      //console.log(data)
      const tempData = [...data, response.data];
      setData(tempData);
    }).catch((err)=>{
        alert("לא קיים")
    });
}
catch{
    alert('לא קיים')
}
  };

  const leftContent = (item) => {
    return (
        <Avatar.Image size={50}    source={{ uri: "https:" + item.current.condition.icon }} />  

    );
  };
const rightContent=(item)=>{
    return(
    
        <Button
        mode="contained"
        onPress={() =>  navigation.navigate("About",item)}
      >
  About
      </Button>
    )
}
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
          <ScrollView>
            {data.length > 0 &&
              data.map((item, index) => {
        
                return (
                  <Card key={index}>
                    <Card.Title
                         titleNumberOfLines={3}
                      title={item.location.name}
                      subtitle={item.location.country}
                    
                      left={()=>leftContent(item)}
                      right={()=>rightContent(item)}
                    />
                  </Card>
                );
              })}
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

export default WeatherScreen;
