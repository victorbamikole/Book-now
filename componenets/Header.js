import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../utils/theme";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable}>
        <Ionicons name="bed-outline" size={24} color="white" />
        <Text style={styles.text}>Stay</Text>
      </Pressable>
      <Pressable style={styles.notPressed}>
        <Ionicons name="airplane-outline" size={24} color="white" />
        <Text style={styles.text}>Flights</Text>
      </Pressable>
      <Pressable style={styles.notPressed}>
        <AntDesign name="car" size={24} color="white" />
        <Text style={styles.text}>Cars</Text>
      </Pressable>
      <Pressable style={styles.notPressed}>
       <Fontisto name="uber" size={24} color="white" />
        <Text style={styles.text}>Taxis</Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 25,
    padding: 7,
  },
  notPressed: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 8,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
