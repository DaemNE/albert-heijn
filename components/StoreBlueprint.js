import React from "react";
import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";

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
        <Text style={styles.titleText}>Store Blueprint</Text>
        <View style={styles.layoutContainer}>
          <View style={[styles.section1, styles.sectionDesign]}>
            <Text>Zuivel</Text>
          </View>
          <View style={[styles.section2, styles.sectionDesign]}>
            <Text>Apero</Text>
          </View>
          <View style={[styles.section3, styles.sectionDesign]}>
            <Text>Brood</Text>
          </View>
          <View style={[styles.section4, styles.sectionDesign]}>
            <Text style={styles.verticalText}>Bier & Fris</Text>
          </View>
          <View style={[styles.section5, styles.sectionDesign]}>
            <Text style={styles.verticalText}>Diepvries</Text>
          </View>
          <View style={[styles.section6, styles.sectionDesign]}>
            <Text style={styles.verticalText}>Alcohol</Text>
          </View>
          <View style={[styles.section7, styles.sectionDesign]}>
            <Text style={styles.verticalText}>Chips & Snacks</Text>
          </View>
          <View style={[styles.section8, styles.sectionDesign]}>
            <Text style={styles.verticalText}>Eieren</Text>
          </View>
          <View style={[styles.section9, styles.sectionDesign]}>
            <Text style={styles.verticalText}>Exotisch</Text>
          </View>
          <View style={[styles.section10, styles.sectionDesign]}>
            <Text style={styles.verticalText}>Proteïnes</Text>
          </View>
          <View style={[styles.section11, styles.sectionDesign]}>
            <Text style={styles.verticalText}>Kaas</Text>
          </View>
          <View style={[styles.section12, styles.sectionDesign]}>
            <Text>Kuisproduct</Text>
          </View>
          <View style={[styles.section13, styles.sectionDesign]}>
            <Text>Hygiëne</Text>
          </View>
          <View style={[styles.section14, styles.sectionDesign]}>
            <Text>Zalm</Text>
          </View>
          <View style={[styles.section15, styles.sectionDesign]}>
            <Text>Maaltijden</Text>
          </View>
          <View style={[styles.section16, styles.sectionDesign]}>
            <Text>Kassa</Text>
          </View>
          <View style={[styles.section17, styles.sectionDesign]}>
            <Text>Lil Italy</Text>
          </View>
          <View style={[styles.section18, styles.sectionDesign]}>
            <Text>Groenten & Fruit</Text>
          </View>
          <View style={[styles.section19, styles.sectionDesign]}>
            <Text>Sapjes</Text>
          </View>
        </View>
        <Button
          title="Back"
          onPress={() => setIsStoreBlueprintVisible(false)}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 10,
    backgroundColor: "#40beeb",
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
  layoutContainer: {
    flex: 5,
    width: "100%",
    marginVertical: "20%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  section1: {
    top: 0,
    left: 0,
    height: "10%",
    width: "50%",
  },
  section2: {
    top: "-10%",
    left: "50%",
    height: "10%",
    width: "20%",
  },
  section3: {
    top: "-20%",
    left: "70%",
    height: "10%",
    width: "30%",
  },
  section4: {
    top: "-20%",
    left: 0,
    height: "50%",
    width: "15%",
  },
  section5: {
    top: "-20%",
    left: 0,
    height: "40%",
    width: "30%",
  },
  section6: {
    top: "-110%",
    left: "15%",
    height: "50%",
    width: "15%",
  },
  section7: {
    top: "-160%",
    left: "30%",
    height: "50%",
    width: "20%",
  },
  section8: {
    top: "-210%",
    left: "50%",
    height: "50%",
    width: "13%",
  },
  section9: {
    top: "-260%",
    left: "63%",
    height: "50%",
    width: "7%",
  },
  section10: {
    top: "-310%",
    left: "70%",
    height: "50%",
    width: "20%",
  },
  section11: {
    top: "-360%",
    left: "90%",
    height: "50%",
    width: "10%",
  },
  section12: {
    top: "-360%",
    left: "30%",
    height: "20%",
    width: "30%",
  },
  section13: {
    top: "-380%",
    left: "60%",
    height: "20%",
    width: "10%",
  },
  section14: {
    top: "-400%",
    left: "70%",
    height: "20%",
    width: "15%",
  },
  section15: {
    top: "-420%",
    left: "85%",
    height: "20%",
    width: "15%",
  },
  section16: {
    top: "-420%",
    left: "30%",
    height: "20%",
    width: "30%",
  },
  section17: {
    top: "-440%",
    left: "60%",
    height: "20%",
    width: "10%",
  },
  section18: {
    top: "-460%",
    left: "70%",
    height: "20%",
    width: "20%",
  },
  section19: {
    top: "-480%",
    left: "90%",
    height: "20%",
    width: "10%",
  },
  verticalText: {
    transform: [{ rotate: "-90deg" }],
    width: 100,
    textAlign: "center",
  },
  sectionDesign: {
    position: "relative",
    backgroundColor: "yellow",
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
