import React, { useRef } from "react";
import { Paystack, paystackProps } from "react-native-paystack-webview";
import { View, TouchableOpacity, Text } from "react-native";

function PayStackPay({ amount, responseHandler }) {
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);

  return (
    <View
      style={{
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paystack
        paystackKey="pk_test_3e69491dc425b2215a689201bbb2565d69b813db"
        billingEmail="paystackwebview@something.com"
        amount={amount}
        onCancel={(e) => {
         
        }}
        onSuccess={responseHandler}
        ref={paystackWebViewRef}
      />

      <TouchableOpacity
        onPress={() => paystackWebViewRef.current.startTransaction()}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Book Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default PayStackPay;
