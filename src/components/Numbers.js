import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

const Numbers = ({ children, increaseValue, decreaseValue }) => {
  return (
    <View style={styles.container}>
      {children.map(number => (
        <TouchableOpacity
          key={number.props.children}
          onPress={e => {
            if (typeof number.props.children === "string") {
              increaseValue(number.props.children);
            } else {
              decreaseValue();
            }
          }}
          style={styles.numbers}
        >
          {number}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "flex-end",
    paddingHorizontal: 40
  },
  numbers: {
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    borderRadius: 50,
    marginHorizontal: 15,
    marginVertical: 10
  }
});

export default Numbers;
