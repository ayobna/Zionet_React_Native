import react, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
const TextInputNum = (props) => {
  const { InputNum, textNumber } = props;

  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder="הכנס מספר"
        keyboardType="numeric"
        onChangeText={num =>  InputNum(num,textNumber)}
      ></TextInput>
    </View>
  );
};
export default TextInputNum;

const styles = StyleSheet.create({
  inputView: {
    margin: "5%",
  },
  inputText: {},
});
