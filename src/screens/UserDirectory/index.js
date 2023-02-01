import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import colors from "../../constants/colors";

const UserDirectoryScreen = ({ navigation }) => {
  return <View style={styles.container}></View>;
};
export default UserDirectoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray_bg,
  },
});
