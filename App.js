import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { InputComponent } from "./components/InputComponent";
import { useState } from "react";
import { ListComponent } from "./components/ListComponent";

export default function App() {
  const [itemList, setItemList] = useState([]);

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
