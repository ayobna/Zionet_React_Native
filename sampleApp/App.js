import react ,{useState} from "react";
import { StyleSheet, Text, View ,Button} from "react-native";


export default function App() {
const [first, setfirst] = useState(1)
  
  const btn = () => {
  setfirst(10)
  };
  return (
    <View style={styles.container}>
      <Text>9999 9999 9999</Text>
      <View style={[{borderWidth:first}, styles.ViewBtn]}>
        <Button
          style={styles.btn}
          title="Click"
          onPress={() => {
            btn()
          }}
        ></Button>
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
  ViewBtn: {
    width:100,
  },
  btn: {
    width: 100,
  },
});
