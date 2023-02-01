import { Dimensions, Platform, ToastAndroid } from "react-native";
import Toast from "react-native-toast-message";
export const ShowMessage = (message, type = "info") => {
  Toast.show({
    type: type,
    text1: message,
  });
};
