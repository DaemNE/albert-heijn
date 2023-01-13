import React, { useEffect, useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { SectionList } from "./SectionList";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export const StoreBlueprint = ({
  isStoreBlueprintVisible,
  setIsStoreBlueprintVisible,
  itemList,
  setItemList,
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
  const [currentSection, setCurrentSection] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      (item) => item.location === section.toString() && !item.checked
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

  const handleSectionPress = (section) => {
    setIsModalVisible(true);
    setCurrentSection(section);
    setIsStoreBlueprintVisible(false);
  };

  const handlePressCloseContainer = () => {
    setIsStoreBlueprintVisible(false);
  };
  return (
    <>
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
        <View style={styles.modalContainer} key={Math.random()}>
          <Text style={styles.titleText}>Store Blueprint</Text>
          <Text>
            Articles left:
            {itemList.filter((item) => item.found !== true).length}
          </Text>
          <View style={styles.layoutContainer}>
            <Pressable
              style={[
                styles.section1,
                styles.sectionDesign,
                {
                  backgroundColor: calcBackgroundColor(section1),
                },
              ]}
              onPress={() => {
                handleSectionPress(1);
              }}
            >
              <View>
                <Text>
                  <MaterialCommunityIcons
                    name="food-variant"
                    size={24}
                    color="black"
                  />
                  {
                    itemList.filter((item) => {
                      return item.location === "1" && !item.found;
                    }).length
                  }
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.section2,
                styles.sectionDesign,
                {
                  backgroundColor: calcBackgroundColor(section2),
                },
              ]}
              onPress={() => {
                handleSectionPress(2);
              }}
            >
              <View>
                <Text>
                  <MaterialCommunityIcons
                    name="sausage"
                    size={24}
                    color="black"
                  />
                  {
                    itemList.filter((item) => {
                      return item.location === "2" && !item.found;
                    }).length
                  }
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.section3,
                styles.sectionDesign,
                {
                  backgroundColor: calcBackgroundColor(section3),
                },
              ]}
              onPress={() => {
                handleSectionPress(3);
              }}
            >
              <View>
                <Text>
                  <FontAwesome5 name="bread-slice" size={24} color="black" />
                  {
                    itemList.filter((item) => {
                      return item.location === "3" && !item.found;
                    }).length
                  }
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.section4,
                styles.sectionDesign,
                {
                  backgroundColor: calcBackgroundColor(section4),
                },
              ]}
              onPress={() => {
                handleSectionPress(4);
              }}
            >
              <View>
                <Text style={styles.verticalText}>
                  <Ionicons name="beer" size={24} color="black" /> &{" "}
                  <MaterialCommunityIcons
                    name="bottle-soda-classic"
                    size={24}
                    color="black"
                  />
                  {
                    itemList.filter((item) => {
                      return item.location === "4" && !item.found;
                    }).length
                  }
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.section5,
                styles.sectionDesign,
                {
                  backgroundColor: calcBackgroundColor(section5),
                },
              ]}
              onPress={() => {
                handleSectionPress(5);
              }}
            >
              <View>
                <Text style={styles.verticalText}>
                  <FontAwesome name="snowflake-o" size={24} color="black" />
                  {
                    itemList.filter((item) => {
                      return item.location === "5" && !item.found;
                    }).length
                  }
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.section6,
                styles.sectionDesign,
                {
                  backgroundColor: calcBackgroundColor(section6),
                },
              ]}
              onPress={() => {
                handleSectionPress(6);
              }}
            >
              <View>
                <Text style={styles.verticalText}>
                  <FontAwesome5 name="wine-glass-alt" size={24} color="black" />
                  {
                    itemList.filter((item) => {
                      return item.location === "6" && !item.found;
                    }).length
                  }
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.section7,
                styles.sectionDesign,
                {
                  backgroundColor: calcBackgroundColor(section7),
                },
              ]}
              onPress={() => {
                handleSectionPress(7);
              }}
            >
              <View>
                <Text style={styles.verticalText}>
                  <FontAwesome5 name="cookie-bite" size={24} color="black" />
                  {
                    itemList.filter((item) => {
                      return item.location === "7" && !item.found;
                    }).length
                  }
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.section8,
                styles.sectionDesign,
                {
                  backgroundColor: calcBackgroundColor(section8),
                },
              ]}
              onPress={() => {
                handleSectionPress(8);
              }}
            >
              <View>
                <Text style={styles.verticalText}>
                  <FontAwesome5 name="egg" size={24} color="black" />
                  {
                    itemList.filter((item) => {
                      return item.location === "8" && !item.found;
                    }).length
                  }
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.section9,
                styles.sectionDesign,
                {
                  backgroundColor: calcBackgroundColor(section9),
                },
              ]}
              onPress={() => {
                handleSectionPress(9);
              }}
            >
              <View>
                <Text style={styles.verticalText}>
                  <MaterialCommunityIcons
                    name="palm-tree"
                    size={24}
                    color="black"
                  />
                  {
                    itemList.filter((item) => {
                      return item.location === "9" && !item.found;
                    }).length
                  }
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.section10,
                styles.sectionDesign,
                {
                  backgroundColor: calcBackgroundColor(section10),
                },
              ]}
              onPress={() => {
                handleSectionPress(10);
              }}
            >
              <View>
                <Text style={styles.verticalText}>
                  <MaterialCommunityIcons
                    name="food-drumstick"
                    size={24}
                    color="black"
                  />
                  {
                    itemList.filter((item) => {
                      return item.location === "10" && !item.found;
                    }).length
                  }
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.section11,
                styles.sectionDesign,
                {
                  backgroundColor: calcBackgroundColor(section11),
                },
              ]}
              onPress={() => {
                handleSectionPress(11);
              }}
            >
              <View>
                <Text style={styles.verticalText}>
                  <FontAwesome5 name="cheese" size={24} color="black" />
                  {
                    itemList.filter((item) => {
                      return item.location === "11" && !item.found;
                    }).length
                  }
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.section12,
                styles.sectionDesign,
                {
                  backgroundColor: calcBackgroundColor(section12),
                },
              ]}
              onPress={() => {
                handleSectionPress(12);
              }}
            >
              <View>
                <Text>
                  <FontAwesome5 name="broom" size={24} color="black" />
                  {
                    itemList.filter((item) => {
                      return item.location === "12" && !item.found;
                    }).length
                  }
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.section13,
                styles.sectionDesign,
                {
                  backgroundColor: calcBackgroundColor(section13),
                },
              ]}
              onPress={() => {
                handleSectionPress(13);
              }}
            >
              <View>
                <Text>
                  <FontAwesome5 name="soap" size={24} color="black" />
                  {
                    itemList.filter((item) => {
                      return item.location === "13" && !item.found;
                    }).length
                  }
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.section14,
                styles.sectionDesign,
                {
                  backgroundColor: calcBackgroundColor(section14),
                },
              ]}
              onPress={() => {
                handleSectionPress(14);
              }}
            >
              <View>
                <Text>
                  <FontAwesome5 name="fish" size={24} color="black" />
                  {
                    itemList.filter((item) => {
                      return item.location === "14" && !item.found;
                    }).length
                  }
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.section15,
                styles.sectionDesign,
                {
                  backgroundColor: calcBackgroundColor(section15),
                },
              ]}
              onPress={() => {
                handleSectionPress(15);
              }}
            >
              <View>
                <Text>
                  <MaterialIcons name="fastfood" size={24} color="black" />
                  {
                    itemList.filter((item) => {
                      return item.location === "15" && !item.found;
                    }).length
                  }
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.section16,
                styles.sectionDesign,
                {
                  backgroundColor: calcBackgroundColor(section16),
                },
              ]}
              onPress={() => {
                handleSectionPress(16);
              }}
            >
              <View>
                <Text>
                  <FontAwesome name="money" size={24} color="black" />
                  {
                    itemList.filter((item) => {
                      return item.location === "16" && !item.found;
                    }).length
                  }
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.section17,
                styles.sectionDesign,
                {
                  backgroundColor: calcBackgroundColor(section17),
                },
              ]}
              onPress={() => {
                handleSectionPress(17);
              }}
            >
              <View>
                <Text>
                  <MaterialCommunityIcons
                    name="pasta"
                    size={24}
                    color="black"
                  />
                  {
                    itemList.filter((item) => {
                      return item.location === "17" && !item.found;
                    }).length
                  }
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.section18,
                styles.sectionDesign,
                {
                  backgroundColor: calcBackgroundColor(section18),
                },
              ]}
              onPress={() => {
                handleSectionPress(18);
              }}
            >
              <View>
                <Text>
                  <MaterialCommunityIcons
                    name="fruit-cherries"
                    size={24}
                    color="black"
                  />
                  {
                    itemList.filter((item) => {
                      return item.location === "18" && !item.found;
                    }).length
                  }
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.section19,
                styles.sectionDesign,
                {
                  backgroundColor: calcBackgroundColor(section19),
                },
              ]}
              onPress={() => {
                handleSectionPress(19);
              }}
            >
              <View>
                <Text>
                  <MaterialIcons name="local-drink" size={24} color="black" />
                  {
                    itemList.filter((item) => {
                      return item.location === "19" && !item.found;
                    }).length
                  }
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[
                styles.section20,
                styles.sectionDesign,
                {
                  backgroundColor: calcBackgroundColor(section20),
                },
              ]}
              onPress={() => {
                handleSectionPress(20);
              }}
            >
              <View>
                <Text>
                  <FontAwesome5 name="cocktail" size={24} color="black" />
                  {
                    itemList.filter((item) => {
                      return item.location === "20" && !item.found;
                    }).length
                  }
                </Text>
              </View>
            </Pressable>
          </View>
          <Button
            title="Back"
            onPress={() => setIsStoreBlueprintVisible(false)}
          />
        </View>
      </Modal>
      <SectionList
        itemList={itemList}
        setItemList={setItemList}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        setIsStoreBlueprintVisible={setIsStoreBlueprintVisible}
      />
    </>
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
  sectionDesign: {
    position: "relative",
    borderWidth: 1,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
});
