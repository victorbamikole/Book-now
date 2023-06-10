import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screns/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import SavedScreen from "./screns/SavedScreen";
import BookingScreen from "./screns/BookingScreen";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "./screns/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { COLORS } from "./utils/theme";

export default function StackNavigator() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomBar() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Home",
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color={COLORS.primary} />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            title: "Save",
            tabBarLabel: "Saved",
            headerShown: true,
            headerRight: () => (
                <Ionicons name="notifications-outline" size={24} color="black" />
            ),
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="heart" size={24} color={COLORS.primary} />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Bookings"
          component={BookingScreen}
          options={{
            title: "Bookings",
            tabBarLabel: "Bookings",
            headerShown: true,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons
                  name="notifications"
                  size={24}
                  color={COLORS.primary}
                />
              ) : (
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="black"
                />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profile",
            tabBarLabel: "Profile",
            headerShown: true,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color={COLORS.primary} />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "red" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="Main"
          component={BottomBar}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
