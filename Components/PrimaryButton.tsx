import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const PrimaryButton = ({ children }) => {
  const pressme = () => {
    console.log("hello bro");
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable  style={styles.buttonInnerContainer} onPress={pressme} android_ripple={{ color: "#72063c" }}>
        <Text style={styles.buttonText} >{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
