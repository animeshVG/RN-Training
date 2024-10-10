import { StyleSheet, Text, View,Alert } from "react-native";
import React, { useState, useEffect } from "react";
import Title from "../Components/Title";
import NumberContainer from "../Components/game/NumberContainer";
import PrimaryButton from "../Components/PrimaryButton";


function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  
  useEffect(() => {
    setCurrentGuess(initialGuess);
  }, [initialGuess]);

  
  function nextGuessHandler(direction) {
    
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      
      const newGuess = generateRandomBetween(1, currentGuess, currentGuess);
      setCurrentGuess(newGuess);
    } else {
      
      const newGuess = generateRandomBetween(currentGuess + 1, 100, currentGuess);
      setCurrentGuess(newGuess);
    }
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={() => nextGuessHandler("lower")}>Lower</PrimaryButton>
        <PrimaryButton onPress={() => nextGuessHandler("greater")}>Higher</PrimaryButton>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
        padding: 24,
        marginTop:10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
});