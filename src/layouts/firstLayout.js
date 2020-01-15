import React, { useContext } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TextInput,
  View
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import FooterNavigator from "../components/footerNavigator";
import { DataPersonContext } from "../../App";

const FirstStep = props => {
  const { namePerson, setNamePerson } = useContext(DataPersonContext);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={styles.gradientHeader}
        colors={["#FDCC06", "#FCBF05", "#FAAD02"]}
      >
        <Text style={styles.titleHeader}>Enter your name</Text>
      </LinearGradient>
      <View style={styles.content}>
        <TextInput
          placeholder="Name"
          onChangeText={text => {
            setNamePerson(text);
          }}
          value={namePerson}
          style={styles.input}
        />
      </View>

      <FooterNavigator navigation={props.navigation} />
    </SafeAreaView>
  );
};

export default FirstStep;

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: 200
  },
  gradientHeader: {
    height: 50,
    width: "100%",
    justifyContent: "center"
  },
  titleHeader: {
    color: "white",
    fontFamily: "Gelasio-Regular",
    marginLeft: 10,
    fontSize: 18
  },
  gradientButton: {
    borderRadius: 8,
    margin: 3,
    width: 60,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    height: height - 128,
    width: width,
    backgroundColor: "#FAFAFA"
  },
  input: {
    height: 40,
    width: width / 1.2,
    borderRadius: 6,
    borderColor: "grey",
    borderWidth: 1
  },
  buttonText: {
    color: "white",
    fontFamily: "EBGaramond"
  }
});
