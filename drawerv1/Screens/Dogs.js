import react, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";
import DogCard from "../components/DogCard";
import { useNavigation } from "@react-navigation/native";
function Dogs() {
  const [data, setData] = useState([{ asd: 0 }]);
  const url =
    "https://findadog-db991-default-rtdb.firebaseio.com/DogsInfo.json";

  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      await getData();
    });
    return unsubscribe;
  }, [navigation]);

  const getData = async () => {
    await axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderedDogsItems = (item) => {
    return  <DogCard  dogInfo={item.item} key="Dogs"/>;
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        {data ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={(item) => renderedDogsItems(item)}
            keyExtractor={(item, index) => String(index)}
            contentContainerStyle={{ flexGrow: 1 }}
          />
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
}

export default Dogs;
