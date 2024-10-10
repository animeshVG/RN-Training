import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./Screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./Screens/GameScreen";

export default function App() {
  const [userNumber, setuserNumber] = useState();

  function pickedNumberhandler(pickedNumber) {
    setuserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberhandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={["#4e0329","#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1522617804560-8454764f1815?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGljZXxlbnwwfHwwfHx8MA%3D%3D",
        }}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
