import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";
import colors from "../../constants/colors";
import exports, { addData } from "../../Utility/API";
import { endPoints } from "../../constants/Environment";
import { FlatList } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";

import { ClearOrgCode } from "../../Utility/helper";
import IconButon from "../../components/IconButton";
import Buton from "../../components/Button";
import { MetricsSizes } from "../../Utility/metrics";
import Loader from "../../components/Loader";

const More = ({ navigation }) => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state).auth;
  const [loading, setLoading] = useState(false);
  const data = [
    {
      id: 1,
      name: "Settings",
      navigation: "Settings",
    },
  ];
  const render = ({ item }) => {
    return (
      <IconButon
        title={item.name}
        onPress={() => {
          navigation.navigate(item.navigation);
        }}
      />
    );
  };

  const logout = () => {


  };
  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <View style={styles.topContainer}>
        <FlatList
          data={data}
          renderItem={render}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Buton
          title="LOGOUT"
          onPress={logout}
          style={styles.logoutButton}
        ></Buton>
      </View>
    </View>
  );
};
export default More;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray_bg,
  },
  topContainer: {
    flex: 0.9,
  },
  bottomContainer: {
    flex: 0.1,
  },
  logoutButton: {
    backgroundColor: colors.error,
    borderRadius: MetricsSizes.ms8,
    padding: MetricsSizes.ms10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: MetricsSizes.hs24,
    marginVertical: MetricsSizes.vs10,
  },
});
