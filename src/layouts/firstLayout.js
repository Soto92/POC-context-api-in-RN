import React from "react";
import { Text, SafeAreaView, TouchableOpacity } from "react-native";

const First = props => {
  return (
    <SafeAreaView
      style={{ justifyContent: "center", alignItems: "center", height: 200 }}
    >
      <Text style={{ marginBottom: 50 }}>layout 01</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Second")}
        style={{
          backgroundColor: "grey",
          width: 40,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 6
        }}
      >
        <Text>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default First;
