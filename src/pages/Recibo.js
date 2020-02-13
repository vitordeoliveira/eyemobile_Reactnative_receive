import React from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
  Button
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { logo } from "../components/Svgs";
import { SvgXml } from "react-native-svg";
import TextTahoma from "../components/TextTahoma";
import { TouchableOpacity } from "react-native-gesture-handler";
import TextDIN from "../components/TextDIN";

const { height, width } = Dimensions.get("window");
const Recibo = ({ route }) => {
  const { value, option } = route.params;

  return (
    <LinearGradient
      colors={["#66ffcc", "#ff66ff"]}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.container}
    >
      <View style={styles.contentMain}>
        <Image
          source={require("../../assets/images/Recibo_background.png")}
          style={styles.image}
        ></Image>
        <View style={styles.content}>
          <SvgXml height={30} xml={logo}></SvgXml>

          <View style={styles.center}>
            <TextTahoma color="#8e8e8e" bold={true}>
              Eyemobile Tecnologia LTDA.
            </TextTahoma>
            <TextTahoma></TextTahoma>
            <TextTahoma color="#8e8e8e">
              Rua Airton Roberto de Oliveira
            </TextTahoma>
            <TextTahoma color="#8e8e8e">Número 64</TextTahoma>
          </View>

          <View style={styles.center}>
            <TextTahoma bold color="#8e8e8e" size={32}>
              R$ {value}
            </TextTahoma>
            <TextTahoma color="#8e8e8e">{option}</TextTahoma>
          </View>

          <TextTahoma color="#8e8e8e">21321321 3123213</TextTahoma>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <TextDIN>CONFIRMAR</TextDIN>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  contentMain: {
    width: width / 1.5,
    height: height / 1.5,
    marginTop: -50
  },
  image: {
    width: "100%",
    height: "100%"
  },
  content: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  center: {
    alignItems: "center"
  },
  button: {}
});

export default Recibo;
