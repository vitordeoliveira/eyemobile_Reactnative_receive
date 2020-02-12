import React, { useState, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SvgXml } from "react-native-svg";
import { credit, cupom, debit, money, vr } from "./Svgs";
import TextDIN from "./TextDIN";
import { useNavigation } from "@react-navigation/native";

const MetodosPagamento = ({ value }) => {
  const [pagination, setPagination] = useState(1);
  const scroll = useRef(null);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scroll}
        onScroll={e => {
          const { x } = e.nativeEvent.contentOffset;
          if (x > 160) {
            setPagination(2);
          } else {
            setPagination(1);
          }
        }}
        pagingEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.page}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Recibo", { option: "Dinheiro" });
            }}
            style={styles.content}
          >
            <SvgXml height={50} xml={money}></SvgXml>
            <TextDIN size={17} mt={6} mt={6}>
              DINHEIRO
            </TextDIN>
          </TouchableOpacity>
          <TouchableOpacity style={styles.content}>
            <SvgXml height={50} xml={debit}></SvgXml>
            <TextDIN size={17} mt={6}>
              DÉBITO
            </TextDIN>
          </TouchableOpacity>
          <TouchableOpacity style={styles.content}>
            <SvgXml height={50} xml={credit}></SvgXml>
            <TextDIN size={17} mt={6}>
              CRÉDITO
            </TextDIN>
          </TouchableOpacity>
        </View>

        <View style={styles.page}>
          <TouchableOpacity style={styles.content}>
            <SvgXml height={50} xml={vr}></SvgXml>
            <TextDIN size={17} mt={6}>
              VR
            </TextDIN>
          </TouchableOpacity>
          <TouchableOpacity style={styles.content}>
            <SvgXml height={50} xml={cupom}></SvgXml>
            <TextDIN size={17} mt={6}>
              CUPOM
            </TextDIN>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        {pagination === 1 ? (
          <>
            <TouchableOpacity style={styles.button}></TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                scroll.current.scrollToEnd();
              }}
              style={styles.buttonDisable}
            ></TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => {
                scroll.current.scrollTo({ x: 0 });
              }}
              style={styles.buttonDisable}
            ></TouchableOpacity>
            <TouchableOpacity style={styles.button}></TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 390,
    height: 150,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  content: {
    alignItems: "center",
    marginTop: 20
  },
  page: {
    flexDirection: "row",
    width: 390,
    justifyContent: "center"
  },
  buttons: {
    flexDirection: "row",
    marginBottom: 20
  },
  button: {
    width: 10,
    height: 10,
    backgroundColor: "#AC8BCE",
    borderRadius: 50,
    marginHorizontal: 6
  },
  buttonDisable: {
    width: 10,
    height: 10,
    backgroundColor: "#8e8e8e",
    borderRadius: 50,
    marginHorizontal: 6
  }
});

export default MetodosPagamento;
