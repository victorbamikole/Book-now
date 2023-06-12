import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PayStackPay from "../componenets/PayStackPay";

export default function SavedScreen() {
  return (
    <SafeAreaView>
      <PayStackPay/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
