import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import Checkbox from "expo-checkbox";
import { AntDesign } from "@expo/vector-icons";

export const ListItem = ({
  text,
  amount,
  id,
  itemList,
  setItemList,
  found,
  overview,
}) => {
  const [checked, setChecked] = useState(found);
  const removeItem = (id) => {
    setItemList(itemList.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.listItem} key={id}>
      {overview ? (
        <Checkbox
          disabled={false}
          value={checked}
          onValueChange={(newValue) => {
            setChecked(newValue);
            found = newValue;
            const indexOfItem = itemList.findIndex((item) => item.id === id);
            itemList[indexOfItem].found = newValue;
            setItemList(itemList);
          }}
          style={styles.checkbox}
        />
      ) : null}
      <Text style={styles.itemText}>{text}</Text>
      <Text style={styles.itemAmount}>{amount}</Text>
      <View style={styles.itemRemoveButton}>
        <Pressable onPress={() => removeItem(id)}>
          <View style={styles.itemRemoveButton}>
            <AntDesign selectionColor={"red"} name="minuscircleo" size={24} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 4,
    justifyContent: "space-around",
    padding: 8,
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
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    height: 35,
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
