import react, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import TextInputNum from "./components/TextInputNum";

export default function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [thirdNumber, setThirdNumber] = useState(0);
  const [sum, setSum] = useState("");
  const calculatorNumbers = () => {
    let sum = parseInt(firstNumber) +  parseInt(secondNumber)  +   parseInt(thirdNumber);
   setSum(sum);
  };

  const InputNum = (number, textNumber) => {
    console.log(textNumber);
    if (textNumber === 1) {
      setFirstNumber(number);
    } else if (textNumber === 2) {
      setSecondNumber(number);
    } else {
      setThirdNumber(number);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInputNum InputNum={InputNum} textNumber={1} />
        <TextInputNum InputNum={InputNum} textNumber={2} />
        <TextInputNum InputNum={InputNum} textNumber={3} />
        <View>
          <Text>{sum}</Text>
          <Button
            style={styles.btn}
            title="סכום"
            onPress={() => {
              calculatorNumbers();
            }}
          ></Button>
        </View>
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
