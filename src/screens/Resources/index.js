import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const ResourceScreen = ({ navigation }) => {
  return <View style={styles.card}></View>;
};
export default ResourceScreen;
const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.gray_bg,
  },
});
