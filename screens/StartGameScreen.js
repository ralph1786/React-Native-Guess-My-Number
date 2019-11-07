import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Card from "../components/Card";
import InputField from "../components/InputField";
import NumberContainer from "../components/NumberContainer";
import CustomButton from "../components/CustomButton";

const StartGameScreen = ({ startGameHandler }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [chosenNumber, setChosenNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const selectedNumber = parseInt(enteredValue);

    if (isNaN(selectedNumber) || selectedNumber <= 0 || selectedNumber > 99) {
      Alert.alert("Invalid number!", "Number must be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler }
      ]);
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setChosenNumber(selectedNumber);
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>Chosen Number</Text>
        <NumberContainer>{chosenNumber}</NumberContainer>
        <CustomButton onPress={() => startGameHandler(chosenNumber)}>
          START GAME
        </CustomButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={{ width: 300, maxWidth: "80%", alignItems: "center" }}>
          <Text>Enter A Number</Text>
          <InputField
            style={styles.input}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.actionButtons}>
            <Button
              color="green"
              title="Confirm"
              onPress={confirmInputHandler}
            />
            <Button color="red" title="Reset" onPress={resetInputHandler} />
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  input: {
    width: 50,
    textAlign: "center"
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center"
  }
});

export default StartGameScreen;
