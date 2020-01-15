import React, { useContext, useEffect } from "react";
import { Text, SafeAreaView, View, StyleSheet, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { DataPersonContext } from "../../App";
import FooterNavigator from "../components/footerNavigator";

const FourthStep = props => {
  const { nameCity, namePerson, yearBirth } = useContext(DataPersonContext);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={styles.gradientHeader}
        colors={["#FDCC06", "#FCBF05", "#FAAD02"]}
      >
        <Text style={styles.titleHeader}>Confirm data</Text>
      </LinearGradient>
      <View style={styles.content}>
        <View>
          {namePerson ? (
            <Text style={styles.message}>Your name is {namePerson}</Text>
          ) : (
            <Text style={styles.message}>Name was not entered!</Text>
          )}

          {nameCity ? (
            <Text style={styles.message}>Your city address name is {nameCity}</Text>
          ) : (
            <Text style={styles.message}>Name was not entered!</Text>
          )}

          {yearBirth ? (
            <Text style={styles.message}>Your city address name is {yearBirth}</Text>
          ) : (
            <Text style={styles.message}>Year was not entered!</Text>
          )}
        </View>
      </View>

      <FooterNavigator navigation={props.navigation} />
    </SafeAreaView>
  );
};

export default FourthStep;

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
  message: {
    fontFamily: "Gelasio-Regular",
    fontSize: 20
  }
});
