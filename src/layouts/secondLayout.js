import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Second = props => {
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
          justifyContent: "center"
        }}
        colors={["#b1c0ce", "#7D94AB", "#6A809A"]}
      >
        <Text style={{ color: "white", fontFamily: 'EBGaramond', marginLeft: 10, fontSize: 18 }}>Layout 02</Text>
      </LinearGradient>
      <View style={{ flexDirection: "row" }}>
        <LinearGradient
          colors={["#90A6BB", "#7D94AB", "#6A809A"]}
          style={{ borderRadius: 8, margin: 3, marginTop: 50 }}
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
        <LinearGradient
          colors={["#90A6BB", "#7D94AB", "#6A809A"]}
          style={{ borderRadius: 8, margin: 3, marginTop: 50 }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Third")}
            style={{
              width: 60,
              height: 40,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "white", fontFamily: 'EBGaramond' }}>Next</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default Second;
