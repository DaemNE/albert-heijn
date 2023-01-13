import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { InputComponent } from "./components/InputComponent";
import { useState } from "react";
import { ListComponent } from "./components/ListComponent";

export default function App() {
  const [itemList, setItemList] = useState([
    {
      amount: "1",
      checked: false,
      id: "0.7138716713980574",
      location: "1",
      text: "Ui",
    },
    {
      amount: "2",
      checked: false,
      id: "0.7138716713980533",
      location: "5",
      text: "Eieren",
    },
    {
      amount: "2",
      checked: false,
      id: "0.7138716713980534",
      location: "20",
      text: "Vuilniszakken",
    },
  ]);

  const [loaded] = useFonts({
    Appie: require("./assets/fonts/hamburg-ah-regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Image
          source={require("./assets/images/ah_logo.jpeg")}
          style={styles.image}
        />
        <Text style={styles.title}>Albert Heijn</Text>
        <InputComponent itemList={itemList} setItemList={setItemList} />
        <ListComponent itemList={itemList} setItemList={setItemList} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 30,
    fontSize: 36,
  },
  title: {
    fontSize: 36,
    fontFamily: "Appie",
    color: "#40beeb",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
  },
});
