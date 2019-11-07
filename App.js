import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [numberRounds, setNumberRounds] = useState(0);

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setNumberRounds(0);
  };

  const restartGameHandler = () => {
    setUserNumber(null);
    setNumberRounds(0);
  };

  const gameOverHandler = numberOfRounds => {
    setNumberRounds(numberOfRounds);
  };

  let content = <StartGameScreen startGameHandler={startGameHandler} />;

  if (userNumber && numberRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (numberRounds > 0) {
    content = (
      <GameOverScreen
        numberRounds={numberRounds}
        restartGameHandler={restartGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Take A Guess" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
