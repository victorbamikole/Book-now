import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
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
import SearchScreen from "./screns/SearchScreen";
import PlacesScreen from "./screns/PlacesScreen";
import MapScreen from "./screns/MapScreen";
import PropertyInfoScreen from "./screns/PropertyInfoScreen";
import RoomsScreen from "./screns/RoomsScreen";
import UserScreen from "./screns/UserScreen";
import ConfirmationScreen from "./screns/ConfirmationScreen";
import LoginScreen from "./screns/LoginScreen";
import RegisterScreen from "./screns/RegisterScreen";
import { AuthContext } from "./context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";

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

  function AuthStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "red" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  function AuthenticatedStack() {
    const authCtx = useContext(AuthContext);
    return (
  
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
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PlacesScreen"
            component={PlacesScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InfoScreen"
            component={PropertyInfoScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="RoomsScreen" component={RoomsScreen} />
          <Stack.Screen name="UserScreen" component={UserScreen} />
          <Stack.Screen
            name="ConfirmationScreen"
            component={ConfirmationScreen}
          />
        </Stack.Navigator>
    );
  }

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

  function Root() {
    const [isTryingLogin, setIsTryingLogin] = useState(true);
    const authCtx = useContext(AuthContext);
    useEffect(() => {
      async function fetchToken() {
        const storedToken = await AsyncStorage.getItem("token");

        if (storedToken) {
          authCtx.authenticate(storedToken);
        }

        setIsTryingLogin(false);
      }
      fetchToken();
    }, []);

    if (isTryingLogin) {
      return <AppLoading />;
    }

    return <Navigation />;
  }

  return (
      <Root />
  );
}

const styles = StyleSheet.create({});
