import react, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import { _storeData, _getData, _removeData } from "../utils/Function";
import DogCard from "../components/DogCard";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
function MyDogs() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [ refresh, setRefresh] = useState(false);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      await getData();
      setRefresh(false)
    });
    return unsubscribe;
  }, [navigation]);

  const getData = async () => {
    const myDogsList = await _getData("MyDogs");
    console.log("MyDogs", myDogsList[0].dogName);
    setData(myDogsList);
  };
  const renderedDogsItems = (item) => {
    let myDogsItem = "MyDogs";
    return <DogCard dogInfo={item.item} myDogsItem={myDogsItem} />;
  };

  const handleRefresh = async () => {
    await getData();
    setRefresh(false)
  };
  return (
    <View style={{ flex: 1 }}>
      <Button
        mode="contained"
        color="red"
        onPress={() => {
         _removeData("MyDogs")
         setRefresh(true)
         setData(undefined)
        }}
      >
        Clear
      </Button>
      <View>
        {data ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={(item) => renderedDogsItems(item)}
            keyExtractor={(item, index) => String(index)}
            contentContainerStyle={{ flexGrow: 1 }}
            refreshing={refresh}
            onRefresh={handleRefresh}
          />
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
}

export default MyDogs;
