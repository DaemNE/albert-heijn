import React, { useState } from "react";
import { Text, StyleSheet, FlatList, Button, View } from "react-native";
import { ListItem } from "./ListItem";
import { StoreBlueprint } from "./StoreBlueprint";

export const ListComponent = ({ itemList, setItemList }) => {
  const [isStoreBlueprintVisible, setIsStoreBlueprintVisible] = useState(false);

  const toggleBlueprint = () => {
    setIsStoreBlueprintVisible(true);
  };

  return (
    <>
      <View style={styles.listContainer}>
        <View style={styles.titleItem}>
          <Text style={styles.titleText}>Article</Text>
          <Text style={styles.titleAmount}>Amount</Text>
        </View>
        <FlatList
          data={itemList}
          style={styles.itemList}
          renderItem={(itemData) => {
            return (
              <ListItem
                text={itemData.item.text}
                amount={itemData.item.amount}
                id={itemData.item.id}
                found={itemData.item.found}
                itemList={itemList}
                setItemList={setItemList}
              />
            );
          }}
        />
        <View style={styles.button}>
          <Button title="Check Store" onPress={toggleBlueprint} />
        </View>
      </View>
      <StoreBlueprint
        isStoreBlueprintVisible={isStoreBlueprintVisible}
        setIsStoreBlueprintVisible={setIsStoreBlueprintVisible}
        itemList={itemList}
        setItemList={setItemList}
      />
    </>
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
  itemList: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    marginBottom: 8,
  },
});
