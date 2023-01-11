import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Pressable } from "react-native";

export const InputComponent = ({ itemList, setItemList }) => {
  const [inputItemText, setInputItemText] = useState("");
  const [inputItemAmount, setInputItemAmount] = useState("");

  const data = require("../assets/data/data.json");

  const addItem = () => {
    if (inputItemAmount && inputItemText) {
      setItemList([
        ...itemList,
        {
          text: inputItemText,
          amount: inputItemAmount,
          id: Math.random().toString(),
        },
      ]);
      setInputItemText("");
      setInputItemAmount("");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputSection}>
        <TextInput
          placeholder="Article"
          style={styles.textInput}
          value={inputItemText}
          onChangeText={(text) => setInputItemText(text)}
          maxLength={15}
        ></TextInput>
        <TextInput
          keyboardType="number-pad"
          placeholder="Amount"
          style={styles.textInput}
          value={inputItemAmount}
          onChangeText={(amount) => {
            setInputItemAmount(amount);
          }}
          maxLength={2}
        ></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => {
            addItem();
          }}
        >
          <Text style={styles.button}>Add Item</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#f88e2b",
    flexDirection: "row",
    width: "100%",
    padding: 16,
    margin: 16,
  },
  inputSection: {
    width: "80%",
    padding: 8,
  },
  textInput: {
    borderColor: "#dddddd",
    borderWidth: 1,
    width: "100%",
    padding: 8,
    margin: 2,
  },
  button: {
    backgroundColor: "#40beeb",
    padding: 8,
    height: 50,
    alignItems: "center",
    borderRadius: 16,
    paddingTop: 14,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
