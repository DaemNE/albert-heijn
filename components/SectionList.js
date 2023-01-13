import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ListItem } from "./ListItem";

export const SectionList = ({
  isModalVisible,
  setIsModalVisible,
  currentSection,
  setCurrentSection,
  setIsStoreBlueprintVisible,
  itemList,
  setItemList,
}) => {
  const [sectionTitle, setSectionTitle] = useState("");
  const [filteredList, setFilteredList] = useState(
    itemList.filter((item) => item.location === currentSection.toString())
  );
  const handlePressCloseContainer = () => {
    setIsModalVisible(false);
    setIsStoreBlueprintVisible(true);
    setCurrentSection(0);
  };

  const formatSectionTitle = () => {
    switch (currentSection) {
      case 1:
        return "Zuivel";
      case 2:
        return "Apero";
      case 3:
        return "Brood";
      case 4:
        return "Bier & Fris";
      case 5:
        return "Diepvries";
      case 6:
        return "Alcohol";
      case 7:
        return "Chips & Snacks";
      case 8:
        return "Eieren & saus";
      case 9:
        return "Exotisch";
      case 10:
        return "Proteïnes";
      case 11:
        return "Kaas";
      case 12:
        return "Kuisproduct";
      case 13:
        return "Hygiëne";
      case 14:
        return "Vis";
      case 15:
        return "Maaltijden";
      case 16:
        return "Kassa";
      case 17:
        return "Lil Italy";
      case 18:
        return "Groente & fruit";
      case 19:
        return "Sapjes";
      case 20:
        return "Divers";

      default:
        return "couldn't find section";
    }
  };

  const filterItemList = () => {
    const filteredList = itemList.filter(
      (item) => item.location === currentSection.toString()
    );
    return filteredList;
  };

  useEffect(() => {
    setSectionTitle(formatSectionTitle());
    setFilteredList(filterItemList());
  }, [currentSection]);

  return (
    <Modal
      visible={isModalVisible}
      transparent={true}
      style={styles.modalContainer}
      animationType="slide"
      onRequestClose={() => setIsModalVisible(false)}
    >
      <Pressable
        style={styles.closeContainer}
        onPress={handlePressCloseContainer}
      />
      <View style={styles.modalContainer}>
        <Text style={styles.titleText}>{sectionTitle}</Text>
        <View>
          <FlatList
            data={filteredList}
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
            <Button title="Back" onPress={() => handlePressCloseContainer()} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 10,
    backgroundColor: "#40baab",
    flexDirection: "column",
    padding: 32,
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeContainer: {
    flex: 3,
  },
  titleText: {
    fontSize: 48,
    color: "white",
  },
  button: {
    paddingBottom: 100,
  },
});
