import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  View,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { logo } from "../components/Svgs";
import { SvgXml } from "react-native-svg";
import TextTahoma from "../components/TextTahoma";
import TextDIN from "../components/TextDIN";

const { height, width } = Dimensions.get("window");

const Recibo = ({ route, navigation }) => {
  const { value, option } = route.params;
  const [optionName, setOptionName] = useState("");

  useEffect(() => {
    switch (option) {
      case 1:
        setOptionName("Dinheiro");
        break;
      case 2:
        setOptionName("Débito");
        break;
      case 3:
        setOptionName("Crédito");
        break;
      case 4:
        setOptionName("VR");
        break;
      case 5:
        setOptionName("Cupom");
        break;
      default:
        break;
    }
  }, []);

  return (
    <>
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
              <TextTahoma color="#8e8e8e">{optionName}</TextTahoma>
            </View>

            <TextTahoma color="#8e8e8e">21321321 3123213</TextTahoma>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Main");
          }}
        >
          <TextDIN color={"#fff"} size={18}>
            CONFIRMAR
          </TextDIN>
        </TouchableOpacity>
      </LinearGradient>
    </>
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
    height: height / 1.5
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
  button: {
    backgroundColor: "#66ffcc",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 45,
    position: "absolute",
    bottom: 40
  }
});

export default Recibo;
