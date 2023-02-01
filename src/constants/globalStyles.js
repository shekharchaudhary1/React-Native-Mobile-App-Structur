import { StyleSheet } from "react-native";
import { MetricsSizes } from "../Utility/metrics";
import colors from "./colors";

const floatingButton = MetricsSizes.ms50;
const small_avatar = MetricsSizes.ms60;
export const globalStyles = StyleSheet.create({
  headerText: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: MetricsSizes.ms24,
    marginVertical: MetricsSizes.vs10,
  },
  logoStyle: {
    width: MetricsSizes.hs250,
    height: MetricsSizes.vs100,
  },
  poweredbyText: {
    fontSize: MetricsSizes.ms14,
    fontWeight: "400",
    color: colors.gray,
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
    paddingVertical: MetricsSizes.vs15,
  },
  roundImage: {
    height: MetricsSizes.hs180,
    width: MetricsSizes.vs180,
    // borderRadius: MetricsSizes.ms180 / 2,
  },
  textinputIcon: {
    paddingRight: MetricsSizes.hs10,
  },
  floatingButtonStyle: {
    position: "absolute",
    width: floatingButton,
    height: floatingButton,
    borderRadius: floatingButton / 2,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 25,
    backgroundColor: colors.primary_500,
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modalContent: {
    flex: 0.2,
    marginTop: "auto",
    backgroundColor: colors.whiteColor,
    borderTopLeftRadius: MetricsSizes.ms10,
    borderTopRightRadius: MetricsSizes.ms10,
  },
  smallAvatar: {
    height: small_avatar,
    width: small_avatar,
    borderRadius: small_avatar / 2,
  },
  activityCard: {
    backgroundColor: colors.whiteColor,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: MetricsSizes.ms6,
    shadowOpacity: 0.1,
    elevation: 10,
    borderRadius: MetricsSizes.ms16,
    marginHorizontal: MetricsSizes.hs20,
    marginVertical: MetricsSizes.vs8,
    //paddingTop: MetricsSizes.vs20,
    paddingBottom: MetricsSizes.vs10,
    width: MetricsSizes.hs327,
  },
  groupTextContainer: {
    width: MetricsSizes.hs122,
    height: MetricsSizes.vs20,
    alignSelf: "flex-end",
    justifyContent: "center",
    backgroundColor: colors.error,
    borderBottomLeftRadius: MetricsSizes.ms16,
    borderTopRightRadius: MetricsSizes.ms16,
  },
  groupText: {
    textAlign: "center",
    fontSize: MetricsSizes.ms12,
    fontWeight: "400",
    color: colors.whiteColor,
  },
  userText: {
    fontSize: MetricsSizes.ms14,
    fontWeight: "500",
    color: colors.gray_900,
    marginStart: MetricsSizes.ms5,
    //textAlign: "center",
    lineHeight: MetricsSizes.ms20,
  },
  dateText: {
    fontSize: MetricsSizes.ms12,
    fontWeight: "500",
    color: colors.gray_600,
    marginStart: MetricsSizes.ms5,
    textAlign: "center",
  },
  activityTitle: {
    fontSize: MetricsSizes.ms16,
    fontWeight: "500",
    color: colors.primary_500,
    lineHeight: MetricsSizes.ms24,
    marginTop: MetricsSizes.vs5,
  },
  activityDescription: {
    fontSize: MetricsSizes.ms14,
    fontWeight: "400",
    color: colors.gray_600,
    lineHeight: MetricsSizes.ms18,
    marginTop: MetricsSizes.vs5,
    marginStart: MetricsSizes.ms5,
  },
  blueText: {
    color: colors.blue,
    fontSize: MetricsSizes.ms12,
    fontWeight: "400",
  },
  horizontalLine: {
    marginTop: MetricsSizes.vs8,
    borderBottomColor: colors.gray_600,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: MetricsSizes.ms20,
  },
  activityIconText: {
    color: colors.gray_600,
    fontSize: MetricsSizes.ms12,
    fontWeight: "500",
    marginStart: MetricsSizes.ms5,
  },
  groupbuttonContainer: {
    marginTop: MetricsSizes.vs10,
    flexDirection: "row",
    backgroundColor: colors.whiteColor,
    borderRadius: MetricsSizes.ms20,
    borderWidth: MetricsSizes.ms1,
    borderColor: colors.gray_300,
    alignSelf: "center",
  },
  groupButton: {
    paddingVertical: MetricsSizes.vs10,
    borderRadius: MetricsSizes.ms20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: MetricsSizes.hs30,
  },
});
