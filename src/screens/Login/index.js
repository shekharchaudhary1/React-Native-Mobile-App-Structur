import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import colors from "../../constants/colors";
import exports, { addData } from "../../Utility/API";
import { endPoints } from "../../constants/Environment";
import Buton from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";

import * as SecureStore from "expo-secure-store";
import { ShowMessage } from "../../components/Toast";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import images from "../../constants/images";
import { globalStyles } from "../../constants/globalStyles";
import message from "../../constants/message";
import { SafeAreaView } from "react-native-safe-area-context";
import { MetricsSizes } from "../../Utility/metrics";
import CustomFastImage from "../../components/CustomFastImage";

const Login = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [orgCode, setOrgCode] = useState("");
  const [isSelected, setSelection] = useState(false);

  const Organisation = useSelector((state) => state).auth.organisation;

  const login = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "MyTabs" }],
    });
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      extraHeight={60}
      enableOnAndroid={true}
    >
      <SafeAreaView>
        <Loader loading={loading} />

        <View style={styles.centerView}>
          <Image
            resizeMode="contain"
            source={{
              uri: Organisation?.Org_Logo?.ConfigValue || images.rq_logo,
            }}
            style={globalStyles.logoStyle}
          />
          <Text style={globalStyles.headerText}>
            {message.login_screen.title}
          </Text>

          <Image
            resizeMode="contain"
            source={images.org_background}
            style={globalStyles.roundImage}
          />
          <Input
            title={message.login_screen.username_title}
            onChangeText={(UserEmail) => setUserEmail(UserEmail)}
            autoCapitalize="none"
            placeholder={
              Organisation?.Login_Username_Text?.ConfigValue ||
              message.login_screen.username_placeholder
            }
            leftIcon={
              <MaterialCommunityIcons
                name="email-outline"
                size={MetricsSizes.ms24}
                color={colors.gray_600}
                style={globalStyles.textinputIcon}
              />
            }
          />

          <Input
            title={message.login_screen.password_title}
            onChangeText={(UserPassword) => setUserPassword(UserPassword)}
            secureTextEntry={!isSelected}
            placeholder={
              Organisation?.Login_Password_Text?.ConfigValue ||
              message.login_screen.password_placeholder
            }
            leftIcon={
              <MaterialIcons
                name="lock-outline"
                size={MetricsSizes.ms24}
                color={colors.gray_600}
                onPress={() => setSelection(!isSelected)}
                style={globalStyles.textinputIcon}
              />
            }
          />
        </View>

        <View style={styles.blueTextContainer}>
          <Text
            style={styles.blueText}
            onPress={useCallback(() => {
              navigation.navigate("ForgotPassword");
            }, [])}
          >
            Forgot Password ?
          </Text>
          <Text
            style={styles.blueText}
            onPress={useCallback(() => {
              navigation.navigate("SignUp");
            }, [])}
          >
            Don't have an account?
          </Text>
        </View>
        <Buton title="Login" onPress={login}></Buton>
      </SafeAreaView>
      <Text style={globalStyles.poweredbyText}>
        {message.common_messages.powered_by}
      </Text>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    paddingBottom: MetricsSizes.vs10,
  },
  centerView: {
    alignItems: "center",
  },
  blueTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: MetricsSizes.hs29,
    marginVertical: MetricsSizes.vs10,
  },
  blueText: {
    color: colors.blue,
    fontSize: MetricsSizes.ms12,
    fontWeight: "400",
  },
});
export default Login;
