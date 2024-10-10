import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import PrimaryButton from "../Components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.InputContainer}>
      <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  InputContainer: {
    marginHorizontal: 24,
    padding: 16,
    marginTop: 100,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width:50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth:2,
    color:"#ddb52f",
    marginVertical:8,
    fontWeight:"bold",
    textAlign:"center"
  },
});
