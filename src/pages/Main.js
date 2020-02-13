import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

import TextDIN from "../components/TextDIN";
import Numbers from "../components/Numbers";
import MetodosPagamento from "../components/MetodosPagamento";

export default function App() {
  const [value, setValue] = useState(0);
  const [currency, setCurrency] = useState("0,00");

  const increaseValue = number => {
    const newValue = value + number;
    setValue(Number(newValue));
    const newCurrency = (Number(newValue) / 100).toFixed(2).replace(".", ",");
    setCurrency(newCurrency);
  };

  const decreaseValue = () => {
    // Option 1
    // const valueArray = String(value).split("");
    // valueArray.pop();
    // const newValue = valueArray.join("");

    // Option 2
    const newValue = String(value).slice(0, -1);

    // Option 3
    // const newValue = String(value).substring(0, str.length - 1);

    const newCurrency = (Number(newValue) / 100).toFixed(2).replace(".", ",");
    setValue(newValue);
    setCurrency(newCurrency);
  };

  return (
    <LinearGradient colors={["#9933ff", "#990099"]} style={styles.container}>
      <View style={styles.contentMain}>
        <View style={styles.value}>
          <TextDIN color="#fff" size={40} mt={7}>
            {`R$  `}
          </TextDIN>
          <TextDIN color="#fff" size={60}>
            {currency}
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

        <MetodosPagamento value={value}></MetodosPagamento>
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
