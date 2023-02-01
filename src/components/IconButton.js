import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { MetricsSizes } from "../Utility/metrics";

const IconButon = (props) => {
  const { onPress, title } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      <AntDesign
        name="right"
        size={MetricsSizes.ms15}
        color={colors.primary_500}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: MetricsSizes.ms15,
    marginVertical: MetricsSizes.vs8,
    marginHorizontal: MetricsSizes.hs15,
    backgroundColor: colors.whiteColor,
    borderRadius: MetricsSizes.ms8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: MetricsSizes.ms8,
    shadowOpacity: 0.1,
    elevation: 6,
  },
  text: {
    fontSize: MetricsSizes.ms16,
  },
});

export default IconButon;
