import React from "react";
import { Text, StyleSheet, FlatList, Button, View } from "react-native";
import { ListItem } from "./ListItem";

export const ListComponent = ({ itemList, setItemList }) => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.titleItem}>
        <Text style={styles.titleText}>Article</Text>
        <Text style={styles.titleAmount}>Amount</Text>
      </View>
      <FlatList
        data={itemList}
        renderItem={(itemData) => {
          return (
            <ListItem
              text={itemData.item.text}
              amount={itemData.item.amount}
              id={itemData.item.id}
              itemList={itemList}
              setItemList={setItemList}
            />
          );
        }}
      />
      <View style={styles.button}>
        <Button title="Check Store" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#40beeb",
    padding: 16,
  },
  button: {
    marginBottom: 48,
  },
  titleItem: {
    flexDirection: "row",
    backgroundColor: "#40beeb",
    width: "100%",
    marginBottom: 4,
    justifyContent: "space-around",
  },
  titleText: {
    flex: 1,
    fontSize: 30,
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
  titleAmount: {
    flex: 1,
    fontSize: 30,
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
});
