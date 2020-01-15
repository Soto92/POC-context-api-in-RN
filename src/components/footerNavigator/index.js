import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const FooterNavigator = props => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('FirstStep')}>
        <LinearGradient
          colors={["#FDCC06", "#FCBF05", "#FAAD02"]}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>1</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SecondStep')}>
        <LinearGradient
          colors={["#FDCC06", "#FCBF05", "#FAAD02"]}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>2</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ThirdStep')}>
        <LinearGradient
          colors={["#FDCC06", "#FCBF05", "#FAAD02"]}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>3</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('FourthStep')}>
        <LinearGradient
          colors={["#FDCC06", "#FCBF05", "#FAAD02"]}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>4</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default FooterNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 56
  },
  gradientButton: {
    borderRadius: 24,
    margin: 6,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontFamily: "Gelasio-Regular"
  },
});
