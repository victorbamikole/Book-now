import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../utils/theme";

export default function ProfileScreen() {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();

  const logOut = () => {
    authCtx.logout();
    const gottenToken = authCtx.token;
    console.log("gottenToken2", gottenToken);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Profile</Text>
      <View style={styles.profileContainer}>
        {/* Display user information */}
        <Text style={styles.label}>Name: John Doe</Text>
        <Text style={styles.label}>Email: john.doe@example.com</Text>
        <Text style={styles.label}>Role: User</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={logOut}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f7f7",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
