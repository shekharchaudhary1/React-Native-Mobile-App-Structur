import { Dimensions, Platform } from "react-native";

export const IS_IOS = Platform.OS === "ios";
export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

