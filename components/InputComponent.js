import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  SafeAreaView,
  ScrollView,
  Keyboard,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export const InputComponent = ({ itemList, setItemList }) => {
  const [inputItemText, setInputItemText] = useState("");
  const [inputItemAmount, setInputItemAmount] = useState("");
  const [selectedItem, setSelectedItem] = useState({});

  const data = require("../assets/data/data.json").availableItems;

  const addItem = () => {
    if (inputItemAmount && selectedItem) {
      setItemList([
        ...itemList,
        {
          text: selectedItem.label,
          amount: inputItemAmount,
          id: Math.random().toString(),
          location: selectedItem.location,
          checked: false,
        },
      ]);
      setSelectedItem({});
      setInputItemText("");
      setInputItemAmount("");
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputSection}>
        <View style={styles.viewContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <SelectDropdown
              data={data}
              onSelect={(item, index) => {
                setSelectedItem(item);
              }}
              defaultButtonText={"Select article"}
              buttonTextAfterSelection={(item, index) => {
                let text = selectedItem.label || "Select article";
                return text;
              }}
              rowTextForSelection={(item, index) => {
                return item.label;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={(isOpened) => {
                return (
                  <FontAwesome
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"#444"}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={"right"}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
              selectedRowStyle={styles.dropdown1SelectedRowStyle}
              search
              searchInputStyle={styles.dropdown1searchInputStyleStyle}
              searchPlaceHolder={"Search here"}
              searchPlaceHolderColor={"darkgrey"}
              renderSearchInputLeftIcon={() => {
                return <FontAwesome name={"search"} color={"#444"} size={18} />;
              }}
            />
          </ScrollView>
        </View>
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
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
    color: "#444",
    textAlign: "left",
    padding: 16,
    fontSize: 16,
    fontWeight: "500",
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
  dropdown1BtnStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
  dropdown1SelectedRowStyle: { backgroundColor: "rgba(0,0,0,0.1)" },
  dropdown1searchInputStyleStyle: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
});
