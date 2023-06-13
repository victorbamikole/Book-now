import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { BookingsContext } from "../context/BookingsContext";
import PayStackPay from "../componenets/PayStackPay";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../Firebase";

const ConfirmationScreen = () => {
  const route = useRoute();
  console.log("conf", route.params);
  const navigation = useNavigation();
  const bookingsCtx = useContext(BookingsContext);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Confirmation",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  const confirmBooking = async () => {
     const uid = auth.currentUser.uid;
    bookingsCtx.addBooking(route.params);
    await setDoc(
      doc(db, "users", `${uid}`),
      {
        bookingDetails: { ...route.params },
      },
      {
        merge: true,
      }
    );
    navigation.navigate("Main");
  };

  return (
    <Pressable style={{ backgroundColor: "white", margin: 10 }}>
      <View
        style={{
          marginHorizontal: 12,
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            {route.params.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              marginTop: 7,
            }}
          >
            <MaterialIcons name="stars" size={24} color="green" />
            <Text>{route.params.rating}</Text>
            <View
              style={{
                backgroundColor: "#003580",
                paddingVertical: 3,
                borderRadius: 5,
                width: 100,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 15,
                }}
              >
                Genius Level
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#17B169",
            paddingHorizontal: 6,
            paddingVertical: 4,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: "white", fontSize: 13 }}>
            Travel sustainable
          </Text>
        </View>
      </View>

      <View
        style={{
          margin: 12,
          flexDirection: "row",
          alignItems: "center",
          gap: 60,
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
            Check In
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}>
            {route.params.startDate}
          </Text>
        </View>

        <View>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
            Check Out
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}>
            {route.params.endDate}
          </Text>
        </View>
      </View>
      <View style={{ margin: 12 }}>
        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
          Rooms and Guests
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}>
          {route.params.rooms} rooms {route.params.adults} adults{" "}
          {route.params.children} children
        </Text>
      </View>

      <Pressable
        style={{
          backgroundColor: "#003580",
          width: 120,
          padding: 5,
          marginHorizontal: 12,
          marginBottom: 20,
          borderRadius: 4,
        }}
      >
        <PayStackPay
          amount={route.params.newPrice * route.params.adults}
          responseHandler={confirmBooking}
        />
      </Pressable>
    </Pressable>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({});
