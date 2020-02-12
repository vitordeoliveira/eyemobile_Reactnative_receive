import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

import TextDIN from "../components/TextDIN";
import Numbers from "../components/Numbers";
import MetodosPagamento from "../components/MetodosPagamento";

export default function App() {
  const [value, setValue] = useState("0,01");
  const [position, setPosition] = useState(3);

  const increaseValue = number => {
    const valueArray = value.split("");
    let newValue;

    if (valueArray[position] === ",") {
      valueArray[position - 1] = number;
      newValue = valueArray.join("");
      setPosition(position - 2);
      setValue(newValue);
    } else if (position >= 0) {
      valueArray[position] = number;
      newValue = valueArray.join("");
      setPosition(position - 1);
      setValue(newValue);
    } else {
      valueArray.unshift(number);
      newValue = valueArray.join("");
      setValue(newValue);
      setPosition(position - 1);
    }
  };

  const decreaseValue = () => {
    const valueArray = value.split("");
    let newValue;

    if (position < -1) {
      valueArray.shift();
      newValue = valueArray.join("");
      setValue(newValue);
      setPosition(position + 1);
    } else if (position === -1) {
      valueArray[position + 1] = "0";
      newValue = valueArray.join("");
      setValue(newValue);
      setPosition(position + 2);
    } else if (position < 3) {
      valueArray[position + 1] = "0";
      newValue = valueArray.join("");
      setValue(newValue);
      setPosition(position + 1);
    }
  };

  return (
    <LinearGradient colors={["#9933ff", "#990099"]} style={styles.container}>
      <View style={styles.contentMain}>
        <View style={styles.value}>
          <TextDIN color="#fff" size={40} mt={7}>
            {`R$  `}
          </TextDIN>
          <TextDIN color="#fff" size={60}>
            {value}
          </TextDIN>
        </View>

        <TextDIN color="#fff" size={18}>
          TOTAL A PAGAR
        </TextDIN>

        <Numbers increaseValue={increaseValue} decreaseValue={decreaseValue}>
          <TextDIN color="#fff" size={35}>
            1
          </TextDIN>
          <TextDIN color="#fff" size={35}>
            2
          </TextDIN>
          <TextDIN color="#fff" size={35}>
            3
          </TextDIN>
          <TextDIN color="#fff" size={35}>
            4
          </TextDIN>
          <TextDIN color="#fff" size={35}>
            5
          </TextDIN>
          <TextDIN color="#fff" size={35}>
            6
          </TextDIN>
          <TextDIN color="#fff" size={35}>
            7
          </TextDIN>
          <TextDIN color="#fff" size={35}>
            8
          </TextDIN>
          <TextDIN color="#fff" size={35}>
            9
          </TextDIN>
          <TextDIN color="#fff" size={35}>
            0
          </TextDIN>

          <TextDIN color="#fff" size={35}>
            <MaterialIcons name="backspace" size={32} />
          </TextDIN>
        </Numbers>

        <MetodosPagamento value></MetodosPagamento>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  contentMain: {
    alignItems: "center",
    marginTop: 50
  },
  value: {
    flexDirection: "row",
    alignItems: "center"
  }
});
