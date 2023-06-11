import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../utils/theme";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import PropertyCard from "../componenets/PropertyCard";

const PlacesScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Popular Places",
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
  return (
    <View>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          padding: 12,
          backgroundColor: "white",
        }}
      >
        <Pressable
          onPress={() => setModalVisibile(!modalVisibile)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Octicons name="arrow-switch" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Sort
          </Text>
        </Pressable>
        <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="filter" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Filter
          </Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate("Map", {
              searchResults: searchPlaces,
            })
          }
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <FontAwesome5 name="map-marker-alt" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Map
          </Text>
        </Pressable>
      </Pressable>
      <ScrollView style={{ backgroundColor: "#F5F5F5" }}>
        {sortedData
          ?.filter((item) => item.place === route.params.place)
          .map((item) =>
            item.properties.map((property, index) => (
              <PropertyCard
                key={index}
                rooms={route.params.rooms}
                children={route.params.children}
                adults={route.params.adults}
                selectedDates={route.params.selectedDates}
                property={property}
                availableRooms={property.rooms}
              />
            ))
          )}
      </ScrollView>
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({});
