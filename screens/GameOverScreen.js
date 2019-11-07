import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = ({ numberRounds, restartGameHandler }) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over!</Text>
      <Text>Number of Rounds: {numberRounds}</Text>
      <Button title="NEW GAME" onPress={restartGameHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GameOverScreen;
