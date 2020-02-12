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

const { height, width } = Dimensions.get("window");
const Recibo = () => {
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
          <TextTahoma bold={true}>Eyemobile Tecnologia LTDA.</TextTahoma>
          <TextTahoma>Rua Airton Roberto de Oliveira Número 64</TextTahoma>
          <View>
            <TextTahoma>R$30,00</TextTahoma>
            <TextTahoma>Dinheiro</TextTahoma>
          </View>

          <TextTahoma>21321321 3123213</TextTahoma>
        </View>
      </View>

      <Button title="CONFIRMAR"></Button>
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
  }
});

export default Recibo;
