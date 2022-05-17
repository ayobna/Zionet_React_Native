import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { Searchbar, Card, Button, Avatar } from "react-native-paper";
import { _storeData, _getData, _removeData } from "../utils/Function";
import { useNavigation } from "@react-navigation/native";
const DogCard = (props) => {
  const { dogInfo, myDogsItem } = props;
  const navigation = useNavigation();   

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
        console.log("myDogsItem ", myDogsItem);
        if (myDogsItem === "MyDogs") {
          console.log(dogInfo);
        }
    });
    return unsubscribe;
  }, [navigation]);
  const saveInMyDoges = async () => {
    const myDogsList = await _getData("MyDogs");

    if (myDogsList) {
        let newMyDogsList = [...myDogsList, dogInfo];
        await _storeData("MyDogs", newMyDogsList);
    } else {
      let MyDogs = [dogInfo];
      await _storeData("MyDogs", MyDogs);
    }
  };
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Card>
        <Card.Title titleNumberOfLines={3} title={dogInfo.dogName} />
        {dogInfo.UriImage !== undefined && (
          <Card.Cover size={50} source={{ uri: dogInfo.UriImage[0] }} />
        )}
        <Card.Actions>
         {myDogsItem===undefined &&<Button onPress={() => saveInMyDoges(dogInfo)}>Save</Button>}
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
});

export default DogCard;
