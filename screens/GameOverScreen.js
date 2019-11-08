import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import CustomButton from "../components/CustomButton";

const GameOverScreen = ({ numberRounds, restartGameHandler }) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30
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
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
    marginVertical: 15
  }
});

export default GameOverScreen;
