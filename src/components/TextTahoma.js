import React from "react";
import { View, Text } from "react-native";

const TextTahoma = ({ children, color, size, mt, bold }) => {
  return (
    <>
      {!bold ? (
        <Text
          style={{ fontFamily: "Tahoma", color, fontSize: size, marginTop: mt }}
        >
          {children}
        </Text>
      ) : (
        <Text
          style={{
            fontFamily: "TahomaBold",
            color,
            fontSize: size,
            marginTop: mt
          }}
        >
          {children}
        </Text>
      )}
    </>
  );
};

export default TextTahoma;
