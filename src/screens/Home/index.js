import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";

import colors from "../../constants/colors";
import { globalStyles } from "../../constants/globalStyles";
import { MetricsSizes } from "../../Utility/metrics";

const Home = ({ navigation, route }) => {
  return <View style={styles.container}></View>;
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray_bg,
    paddingBottom: MetricsSizes.vs40,
  },
});
