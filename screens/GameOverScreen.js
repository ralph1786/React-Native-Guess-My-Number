import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import CustomButton from "../components/CustomButton";

const GameOverScreen = ({ numberRounds, restartGameHandler }) => {
  return (
    <View style={styles.screen}>
      {/* <Text style={}>Game Over!</Text> */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/game-over.png")}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.textContainer}>
        Number of Rounds: <Text style={styles.highlight}>{numberRounds}</Text>
      </Text>
      <CustomButton onPress={restartGameHandler}>NEW GAME</CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  highlight: {
    color: "red",
    fontWeight: "600"
  },
  textContainer: {
    textAlign: "center",
    fontSize: 22,
    marginVertical: 15
  }
});

export default GameOverScreen;
