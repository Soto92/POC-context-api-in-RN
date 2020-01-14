import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

const Second = props => {
  return (
    <SafeAreaView
      style={{ justifyContent: "center", alignItems: "center", height: 200 }}
    >
      <Text style={{ marginBottom: 50 }}>layout 02</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{
            margin: 3,
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
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Third")}
          style={{
            margin: 3,
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
      </View>
    </SafeAreaView>
  );
};

export default Second;
