import React, { useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import colors from "../../constants/colors";
import { addData } from "../../Utility/API";
import { endPoints } from "../../constants/Environment";
import Buton from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { ShowMessage } from "../../components/Toast";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import images from "../../constants/images";
import { globalStyles } from "../../constants/globalStyles";
import message from "../../constants/message";
import { getOrgCode } from "../../Utility/helper";
import SuccessModal from "../../components/SuccessModal";
import { MetricsSizes } from "../../Utility/metrics";

const SignUp = ({ navigation }) => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
    confirmpass: "",
    firstname: "",
    lastname: "",
  });
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const User = useSelector((state) => state).auth;
  const Organisation = useSelector((state) => state).auth.organisation;

  const signUp = () => {
    if (!user.userName) {
      ShowMessage(
        message.signup_screen.error_username,
        message.common_messages.error_toast
      );
      return;
    }
    if (!user.password) {
      ShowMessage(
        message.signup_screen.error_password,
        message.common_messages.error_toast
      );
      return;
    }
    if (!user.confirmpass) {
      ShowMessage(
        message.signup_screen.error_confirmpass,
        message.common_messages.error_toast
      );
      return;
    }
    if (!user.firstname) {
      ShowMessage(
        message.signup_screen.error_firstname,
        message.common_messages.error_toast
      );
      return;
    }
    if (!user.lastname) {
      ShowMessage(
        message.signup_screen.error_lastname,
        message.common_messages.error_toast
      );
      return;
    }
    if (user.password != user.confirmpass) {
      ShowMessage(
        message.signup_screen.error_passmatch,
        message.common_messages.error_toast
      );
      return;
    }
    setLoading(true);
    let data = {
      emailId: user.userName,
      orgCode: getOrgCode(),
      firstName: user.firstname,
      lastName: user.lastname,
      password: user.password,
    };
    let url = endPoints.api.SIGN_UP;
    addData(url, data)
      .then((response) => {
        setLoading(false);
        if (response?.data?.statusCode == 200) {
          setUser((previous) => ({
            userName: "",
            password: "",
            confirmpass: "",
            firstname: "",
            lastname: "",
          }));
          setVisible(true);
        } else if (response?.data?.statusCode == 400) {
          ShowMessage(response?.data?.error[0]?.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SuccessModal
        isVisible={visible}
        message={message.signup_screen.success_message}
        onClose={setVisible}
      />
      <SafeAreaView>
        <Loader loading={loading} />
        <View style={styles.centerView}>
          <Image
            resizeMode="contain"
            source={{
              uri: Organisation?.Org_Logo?.ConfigValue || images.rq_logo,
            }}
            style={styles.tinylogo}
          />
          <Text style={globalStyles.headerText}>
            {message.signup_screen.title}
          </Text>
        </View>

        <View style={styles.textBoxContainer}>
          <KeyboardAwareScrollView extraHeight={60} enableOnAndroid={true}>
            <Input
              value={user.firstname}
              title={message.signup_screen.firstname_title}
              onChangeText={(value) =>
                setUser((previous) => ({
                  ...previous,
                  firstname: value,
                }))
              }
              autoCapitalize="none"
              placeholder={message.signup_screen.firstname_placeholder}
              leftIcon={
                <MaterialCommunityIcons
                  name="file-account-outline"
                  size={MetricsSizes.ms24}
                  color={colors.gray_600}
                  style={styles.textinputIcon}
                />
              }
            />
            <Input
              value={user.lastname}
              title={message.signup_screen.lastname_title}
              onChangeText={(value) =>
                setUser((previous) => ({
                  ...previous,
                  lastname: value,
                }))
              }
              autoCapitalize="none"
              placeholder={message.signup_screen.lastname_placeholder}
              leftIcon={
                <MaterialCommunityIcons
                  name="file-account-outline"
                  size={MetricsSizes.ms24}
                  color={colors.gray_600}
                  style={styles.textinputIcon}
                />
              }
            />
            <Input
              value={user.userName}
              title={message.signup_screen.username_title}
              onChangeText={(value) =>
                setUser((previous) => ({
                  ...previous,
                  userName: value,
                }))
              }
              autoCapitalize="none"
              placeholder={message.signup_screen.username_placeholder}
              leftIcon={
                <MaterialCommunityIcons
                  name="email-outline"
                  size={MetricsSizes.ms24}
                  color={colors.gray_600}
                  style={styles.textinputIcon}
                />
              }
            />
            <Input
              value={user.password}
              title={message.signup_screen.password_title}
              onChangeText={(value) =>
                setUser((previous) => ({
                  ...previous,
                  password: value,
                }))
              }
              autoCapitalize="none"
              placeholder={message.signup_screen.password_placeholder}
              leftIcon={
                <MaterialCommunityIcons
                  name="lock-open-outline"
                  size={MetricsSizes.ms24}
                  color={colors.gray_600}
                  style={styles.textinputIcon}
                />
              }
            />
            <Input
              value={user.confirmpass}
              title={message.signup_screen.confirm_password_title}
              onChangeText={(value) =>
                setUser((previous) => ({
                  ...previous,
                  confirmpass: value,
                }))
              }
              autoCapitalize="none"
              placeholder={message.signup_screen.confirm_password_placeholder}
              leftIcon={
                <MaterialCommunityIcons
                  name="lock-open-outline"
                  size={MetricsSizes.ms24}
                  color={colors.gray_600}
                  style={styles.textinputIcon}
                />
              }
            />
          </KeyboardAwareScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <Buton title="Submit" onPress={signUp}></Buton>
          <Buton
            title="Back"
            onPress={() => navigation.goBack()}
            outlineButton={true}
          ></Buton>
        </View>
        <View style={styles.poweredContainer}>
          <Text style={globalStyles.poweredbyText}>
            {message.common_messages.powered_by}
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteColor,
  },
  centerView: {
    alignItems: "center",
  },
  bodyContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    paddingVertical: 10,
  },
  poweredContainer: {
    paddingVertical: 10,
  },
  textinputIcon: {
    paddingRight: "3%",
  },
  textBoxContainer: {
    paddingTop: 25,
    alignItems: "center",
  },
  tinylogo: {
    width: 220,
    height: 120,
  },
});
export default SignUp;
