import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../Components/title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent Guess</Title>

      <View>
        <Text>Higher or Lower</Text>
      </View>
      <View>
        <Text>Hello </Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
