import React from "react";
import { View, Text } from "react-native";

const TextDIN = ({ children, color, size, mt }) => {
  return (
    <>
      <Text style={{ fontFamily: "Din", color, fontSize: size, marginTop: mt }}>
        {children}
      </Text>
    </>
  );
};

export default TextDIN;
