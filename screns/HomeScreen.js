import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { COLORS } from "../utils/theme";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Header from "../componenets/Header";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import { ModalContent } from "react-native-modals";
import {
  BottomModal,
  ModalButton,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

export default function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const bookedName = route.params?.input;
  const [selectedDate, setSelectedDate] = useState();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisibile, setModalVisibile] = useState(false);
  console.log(selectedDate);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 15 }}
        />
      ),
      headerShown: true,
      title: "Booking.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: COLORS.primary,
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  });
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };

  const searchPlaces = (place) => {
    if (!route.params || !selectedDate || !route.params.input) {
      Alert.alert("Invalid Details", "Enter all fields", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    if (route.params || selectedDate || route.params.input) {
      navigation.navigate("PlacesScreen", {
        rooms: rooms,
        selectedDate: selectedDate,
        adults: adults,
        children: children,
        place: place,
      });
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <View style={styles.inputView}>
            <Pressable
              style={styles.pressable}
              onPress={() => navigation.navigate("SearchScreen")}
            >
              <Feather name="search" size={24} color="black" />
              <TextInput
                value={bookedName}
                placeholderTextColor={"black"}
                placeholder={
                  route?.params ? route.params.input : "Enter your destination"
                }
              />
            </Pressable>
            <Pressable style={styles.pressable}>
              <Feather name="calendar" size={24} color="black" />
              <DatePicker
                style={{
                  width: 350,
                  height: 30,
                  borderWidth: 0,
                  borderRadius: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    alignItems: "center",
                    flexDirection: "row",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: COLORS.primary,
                  },
                  contentText: {
                    fontSize: 15,
                    alignItems: "center",
                    flexDirection: "row",
                    marginRight: "auto",
                  },
                }}
                selectedBgColor="#0047AB"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDate(startDate, endDate)
                }
                centerAlign
                allowFontScaling={false}
                placeholder={"Select Date"}
                mode={"range"}
              />
            </Pressable>
            <Pressable
              style={styles.pressable}
              onPress={() => setModalVisibile(!modalVisibile)}
            >
              <Ionicons name="person" size={24} color="black" />
              <TextInput
                placeholderTextColor={"red"}
                placeholder={` ${rooms}room + ${adults} adults + ${children} children`}
              />
            </Pressable>
            <Pressable
              onPress={() => searchPlaces(route?.params)}
              style={{
                paddingHorizontal: 10,
                borderWidth: 2,
                borderColor: "#FFC72C",
                paddingVertical: 15,
                backgroundColor: "#2a52be",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "500",
                  color: "white",
                }}
              >
                Search
              </Text>
            </Pressable>
          </View>
          <Text
            style={{ marginHorizontal: 20, fontSize: 17, fontWeight: "500" }}
          >
            Travel More spend less
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                backgroundColor: "#003580",
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                Genius
              </Text>
              <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
                You are are genius level one in our loyalty program
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                borderColor: "#E0E0E0",
                borderWidth: 2,
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                15% Discounts
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Complete 5 stays to unlock level 2
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                borderColor: "#E0E0E0",
                borderWidth: 2,
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginVertical: 7,
                }}
              >
                10% Discounts
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>
                Enjoy Discounts at participating at properties worldwide
              </Text>
            </Pressable>
          </ScrollView>
          <Pressable
            style={{
              marginTop: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 200, height: 50, resizeMode: "cover" }}
              source={{
                uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png",
              }}
            />
          </Pressable>
        </ScrollView>
      </View>
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: COLORS.primary,
              }}
              onPress={() => setModalVisibile(!modalVisibile)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select rooms and guest" />}
        modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        visible={modalVisibile}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Rooms</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setRooms(Math.max(1, rooms - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {rooms}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setRooms((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Adults</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setAdults(Math.max(1, adults - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {adults}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setAdults((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Children</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {children}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setChildren((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputView: {
    margin: 20,
    borderColor: "#FFC72C",
    borderWidth: 3,
    borderRadius: 6,
  },
  pressable: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    gap: 10,
    borderWidth: 2,
    borderColor: "#FFC72C",
    paddingVertical: 15,
  },
});
