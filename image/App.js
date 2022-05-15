import react, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export default function App() {
  const [image, setImage] = useState(
    img1
  );


  const img1='https://source.unsplash.com/random/300x200'
  const img2='https://images.unsplash.com/photo-1650820360345-43becfc3e2f0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjYwMjE3OQ&ixlib=rb-1.2.1&q=80&w=300'
  return (
    <View style={styles.container}>
      <Text>images</Text>

      <View style={styles.imageContainer}>
        <Image style={styles.img} source={{ uri: image }} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <MaterialIcons
          name="keyboard-arrow-left"
          onPress={()=>setImage(img1)}
          size={24}
          color="black"
        />
        <MaterialIcons
          name="keyboard-arrow-right"
          onPress={()=>setImage(img2)}
          size={24}
          color="black"
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
  imageContainer: {
    width: 300,
    height: 200,
    margin: 1,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginBottom: 20,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
