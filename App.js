import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { ModalPortal } from "react-native-modals";
import BookingsContextProvider from "./context/BookingsContext";
import AuthContextProvider from "./context/AuthContext";

export default function App() {
  return (
    <>
      <BookingsContextProvider>
        <AuthContextProvider>
          <StackNavigator />
          <ModalPortal />
        </AuthContextProvider>
      </BookingsContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
