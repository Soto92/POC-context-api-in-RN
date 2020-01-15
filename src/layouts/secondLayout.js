import React, { useContext } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TextInput
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { DataPersonContext } from "../../App";
import FooterNavigator from "../components/footerNavigator";

const SecondStep = props => {
  const { nameCity, setNameCity } = useContext(DataPersonContext);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={styles.gradientHeader}
        colors={["#FDCC06", "#FCBF05", "#FAAD02"]}
      >
        <Text style={styles.titleHeader}>Enter your city address</Text>
      </LinearGradient>

      <View style={styles.content}>
        <TextInput
          placeholder="City name"
          onChangeText={text => setNameCity(text)}
          value={nameCity}
          style={styles.input}
        />
      </View>

     <FooterNavigator navigation={props.navigation}/>
    </SafeAreaView>
  );
};

export default SecondStep;

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
});
