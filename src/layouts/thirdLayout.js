import React from "react";
import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Third = props => {
  return (
    <SafeAreaView
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        height: 200
      }}
    >
      <LinearGradient
        style={{
          height: 50,
          width: "100%",
          justifyContent: "center",
        }}
        colors={["#b1c0ce", "#7D94AB", "#6A809A"]}
      >
        <Text style={{ color: "white", marginLeft: 10, fontSize: 18, fontFamily: 'EBGaramond' }}>Layout 03</Text>
      </LinearGradient>

      <LinearGradient
        colors={["#90A6BB", "#7D94AB", "#6A809A"]}
        style={{ borderRadius: 8, marginTop: 50 }}
      >
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{
            width: 60,
            height: 40,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontFamily: 'EBGaramond' }}>Back</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Third;
