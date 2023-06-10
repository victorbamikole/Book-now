import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../utils/theme";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Header from "../componenets/Header";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";

export default function HomeScreen() {
  const navigation = useNavigation();
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
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.inputView}>
          <Pressable style={styles.pressable}>
            <Feather name="search" size={24} color="black" />
            <TextInput
              placeholderTextColor={"black"}
              placeholder="Enter your destination"
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
          <Pressable style={styles.pressable}>
            <Ionicons name="person" size={24} color="black" />
            <TextInput
              placeholderTextColor={"red"}
              placeholder="1 room + 2 adults + 0 children"
            />
          </Pressable>
          <Pressable
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
      </ScrollView>
    </View>
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
