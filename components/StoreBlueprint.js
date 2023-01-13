import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

export const StoreBlueprint = ({
  isStoreBlueprintVisible,
  setIsStoreBlueprintVisible,
}) => {
  const handlePressCloseContainer = () => {
    setIsStoreBlueprintVisible(false);
  };
  return (
    <Modal
      transparent={true}
      visible={isStoreBlueprintVisible}
      style={styles.modalContainer}
      animationType="slide"
      onRequestClose={() => setIsStoreBlueprintVisible(false)}
    >
      <Pressable
        style={styles.closeContainer}
        onPress={handlePressCloseContainer}
      />
      <View style={styles.modalContainer}>
        <Text>Hi</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 10,
    backgroundColor: "rgb(178, 210, 53)",
    flexDirection: "row",
  },
  closeContainer: {
    flex: 3,
  },
});
