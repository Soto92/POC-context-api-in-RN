import React from "react";
import { Text, SafeAreaView, TouchableOpacity } from "react-native";

const Third = props => {
  return (
    <SafeAreaView
      style={{ justifyContent: "center", alignItems: "center", height: 200 }}
    >
      <Text style={{ marginBottom: 50 }}>layout 03</Text>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={{
          backgroundColor: "grey",
          width: 40,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 6
        }}
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Third;
