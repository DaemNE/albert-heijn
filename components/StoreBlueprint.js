import React, { useEffect, useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";

export const StoreBlueprint = ({
  isStoreBlueprintVisible,
  setIsStoreBlueprintVisible,
  itemList,
}) => {
  const [section1, setSection1] = useState(0);
  const [section2, setSection2] = useState(0);
  const [section3, setSection3] = useState(0);
  const [section4, setSection4] = useState(0);
  const [section5, setSection5] = useState(0);
  const [section6, setSection6] = useState(0);
  const [section7, setSection7] = useState(0);
  const [section8, setSection8] = useState(0);
  const [section9, setSection9] = useState(0);
  const [section10, setSection10] = useState(0);
  const [section11, setSection11] = useState(0);
  const [section12, setSection12] = useState(0);
  const [section13, setSection13] = useState(0);
  const [section14, setSection14] = useState(0);
  const [section15, setSection15] = useState(0);
  const [section16, setSection16] = useState(0);
  const [section17, setSection17] = useState(0);
  const [section18, setSection18] = useState(0);
  const [section19, setSection19] = useState(0);
  const [section20, setSection20] = useState(0);

  const calcBackgroundColor = (amountOfItems) => {
    if (amountOfItems === 0) {
      return "rgba(193, 235, 249)";
    } else if (amountOfItems > 0 && amountOfItems < 5) {
      return "#50C878";
    } else if (amountOfItems > 5 && amountOfItems < 10) {
      return "#FFA500";
    } else {
      return "#B90E0A";
    }
  };

  const calcAmountOfItemsInSection = (section) => {
    const duplicateList = itemList.filter(
      (item) => item.location === section.toString()
    );
    return duplicateList.length;
  };

  useEffect(() => {
    setSection1(calcAmountOfItemsInSection(1));
    setSection2(calcAmountOfItemsInSection(2));
    setSection3(calcAmountOfItemsInSection(3));
    setSection4(calcAmountOfItemsInSection(4));
    setSection5(calcAmountOfItemsInSection(5));
    setSection6(calcAmountOfItemsInSection(6));
    setSection7(calcAmountOfItemsInSection(7));
    setSection8(calcAmountOfItemsInSection(8));
    setSection9(calcAmountOfItemsInSection(9));
    setSection10(calcAmountOfItemsInSection(10));
    setSection11(calcAmountOfItemsInSection(11));
    setSection12(calcAmountOfItemsInSection(12));
    setSection13(calcAmountOfItemsInSection(13));
    setSection14(calcAmountOfItemsInSection(14));
    setSection15(calcAmountOfItemsInSection(15));
    setSection16(calcAmountOfItemsInSection(16));
    setSection17(calcAmountOfItemsInSection(17));
    setSection18(calcAmountOfItemsInSection(18));
    setSection19(calcAmountOfItemsInSection(19));
    setSection20(calcAmountOfItemsInSection(20));
  }, [isStoreBlueprintVisible]);

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
          <View
            style={[
              styles.section1,
              styles.sectionDesign,
              {
                backgroundColor: calcBackgroundColor(section1),
              },
            ]}
          >
            <Text>Zuivel 1</Text>
          </View>
          <View
            style={[
              styles.section2,
              styles.sectionDesign,
              {
                backgroundColor: calcBackgroundColor(section2),
              },
            ]}
          >
            <Text>Apero 2</Text>
          </View>
          <View
            style={[
              styles.section3,
              styles.sectionDesign,
              {
                backgroundColor: calcBackgroundColor(section3),
              },
            ]}
          >
            <Text>Brood 3</Text>
          </View>
          <View
            style={[
              styles.section4,
              styles.sectionDesign,
              {
                backgroundColor: calcBackgroundColor(section4),
              },
            ]}
          >
            <Text style={styles.verticalText}>Bier & Fris 4</Text>
          </View>
          <View
            style={[
              styles.section5,
              styles.sectionDesign,
              {
                backgroundColor: calcBackgroundColor(section5),
              },
            ]}
          >
            <Text style={styles.verticalText}>Diepvries 5</Text>
          </View>
          <View
            style={[
              styles.section6,
              styles.sectionDesign,
              {
                backgroundColor: calcBackgroundColor(section6),
              },
            ]}
          >
            <Text style={styles.verticalText}>Alcohol 6</Text>
          </View>
          <View
            style={[
              styles.section7,
              styles.sectionDesign,
              {
                backgroundColor: calcBackgroundColor(section7),
              },
            ]}
          >
            <Text style={styles.verticalText}>Chips & Snacks 7</Text>
          </View>
          <View
            style={[
              styles.section8,
              styles.sectionDesign,
              {
                backgroundColor: calcBackgroundColor(section8),
              },
            ]}
          >
            <Text style={styles.verticalText}>Eieren 8</Text>
          </View>
          <View
            style={[
              styles.section9,
              styles.sectionDesign,
              {
                backgroundColor: calcBackgroundColor(section9),
              },
            ]}
          >
            <Text style={styles.verticalText}>Exotisch 9</Text>
          </View>
          <View
            style={[
              styles.section10,
              styles.sectionDesign,
              {
                backgroundColor: calcBackgroundColor(section10),
              },
            ]}
          >
            <Text style={styles.verticalText}>Proteïnes 10</Text>
          </View>
          <View
            style={[
              styles.section11,
              styles.sectionDesign,
              {
                backgroundColor: calcBackgroundColor(section11),
              },
            ]}
          >
            <Text style={styles.verticalText}>Kaas 11</Text>
          </View>
          <View
            style={[
              styles.section12,
              styles.sectionDesign,
              {
                backgroundColor: calcBackgroundColor(section12),
              },
            ]}
          >
            <Text>Kuisproduct 12</Text>
          </View>
          <View
            style={[
              styles.section13,
              styles.sectionDesign,
              {
                backgroundColor: calcBackgroundColor(section13),
              },
            ]}
          >
            <Text>Hygiëne 13</Text>
          </View>
          <View
            style={[
              styles.section14,
              styles.sectionDesign,
              {
                backgroundColor: calcBackgroundColor(section14),
              },
            ]}
          >
            <Text>Zalm 14</Text>
          </View>
          <View
            style={[
              styles.section15,
              styles.sectionDesign,
              {
                backgroundColor: calcBackgroundColor(section15),
              },
            ]}
          >
            <Text>Maaltijden 15</Text>
          </View>
          <View
            style={[
              styles.section16,
              styles.sectionDesign,
              {
                backgroundColor: calcBackgroundColor(section16),
              },
            ]}
          >
            <Text>Kassa 16</Text>
          </View>
          <View
            style={[
              styles.section17,
              styles.sectionDesign,
              {
                backgroundColor: calcBackgroundColor(section17),
              },
            ]}
          >
            <Text>Lil Italy 17</Text>
          </View>
          <View
            style={[
              styles.section18,
              styles.sectionDesign,
              {
                backgroundColor: calcBackgroundColor(section18),
              },
            ]}
          >
            <Text>Groenten & Fruit 18</Text>
          </View>
          <View
            style={[
              styles.section19,
              styles.sectionDesign,
              {
                backgroundColor: calcBackgroundColor(section19),
              },
            ]}
          >
            <Text>Sapjes 19</Text>
          </View>
          <View
            style={[
              styles.section20,
              styles.sectionDesign,
              {
                backgroundColor: calcBackgroundColor(section20),
              },
            ]}
          >
            <Text>Divers 20</Text>
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
  section20: {
    top: "-480%",
    left: "60%",
    height: "10%",
    width: "20%",
  },
  verticalText: {
    transform: [{ rotate: "-90deg" }],
    width: 100,
    textAlign: "center",
  },
  sectionDesign: {
    position: "relative",
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
