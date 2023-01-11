import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import Checkbox from "expo-checkbox";

export const ListItem = ({ text, amount, id, itemList, setItemList }) => {
  const [checked, setChecked] = useState(false);
  const removeItem = (id) => {
    setItemList(itemList.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.listItem}>
      <Checkbox
        disabled={false}
        value={checked}
        onValueChange={(newValue) => setChecked(newValue)}
        style={styles.checkbox}
      />
      <Text style={styles.itemText}>{text}</Text>
      <Text style={styles.itemAmount}>{amount}</Text>
      <View style={styles.itemRemoveButton}>
        <Pressable onPress={() => removeItem(id)}>
          <Text style={styles.removeButton}>x</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    backgroundColor: "#40beeb",
    width: "100%",
    marginBottom: 4,
    justifyContent: "space-around",
  },
  itemText: {
    flex: 5,
    fontSize: 24,
    color: "white",
    textAlign: "left",
    paddingLeft: 32,
  },
  itemAmount: {
    flex: 3,
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
  itemRemoveButton: {
    flex: 1,
    backgroundColor: "red",
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  removeButton: {
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  checkbox: {
    marginTop: 6,
  },
});
