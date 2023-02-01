import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import colors from "../../constants/colors";
import { addData } from "../../Utility/API";
import { endPoints } from "../../constants/Environment";
import Buton from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { ShowMessage } from "../../components/Toast";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import images from "../../constants/images";
import { globalStyles } from "../../constants/globalStyles";
import message from "../../constants/message";
import { getOrgCode } from "../../Utility/helper";
import { SafeAreaView } from "react-native-safe-area-context";
import SuccessModal from "../../components/SuccessModal";
import { MetricsSizes } from "../../Utility/metrics";

const ForgotPassword = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [orgCode, setOrgCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const forgot = async () => {
    if (!userEmail) {
      ShowMessage(
        message.forgotpass_screen.username_title,
        message.common_messages.error_toast
      );
      return;
    }
    setLoading(true);
    let data = {
      emailId: userEmail,
      orgCode: getOrgCode(),
    };
    let url = endPoints.api.FORGOT_PASSWORD;
    addData(url, data)
      .then((response) => {
        console.log(response);
        setLoading(false);
        if (response?.data?.statusCode == 200) {
          setUserEmail("");
          setVisible(true);
        } else if (response?.data?.statusCode == 400) {
          ShowMessage(
            response.data.error[0].message,
            message.common_messages.error_toast
          );
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      extraHeight={60}
      enableOnAndroid={true}
    >
      <SafeAreaView>
        <SuccessModal
          isVisible={visible}
          message={message.forgotpass_screen.reset_message}
          onClose={setVisible}
        />
        <Loader loading={loading} />
        <View style={styles.centerView}>
          <Image
            resizeMode="contain"
            source={{
              uri: images.rq_logo,
            }}
            style={globalStyles.logoStyle}
          />
          <Text style={globalStyles.headerText}>
            {message.forgotpass_screen.title}
          </Text>

          <Image
            resizeMode="contain"
            source={images.org_background}
            style={globalStyles.roundImage}
          />
          <View style={styles.bottomContainer}>
            <Input
              value={userEmail}
              title={message.forgotpass_screen.username_title}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              autoCapitalize="none"
              placeholder={
                message.forgotpass_screen.username_placeholder
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
          </View>
        </View>

        <Buton title="Submit" onPress={forgot}></Buton>
        <Buton
          title="Back"
          onPress={() => navigation.goBack()}
          outlineButton={true}
        ></Buton>
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
    paddingBottom: 10,
  },
  centerView: {
    alignItems: "center",
  },
  bodyContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    paddingTop: MetricsSizes.vs25,
  },
});
export default ForgotPassword;
