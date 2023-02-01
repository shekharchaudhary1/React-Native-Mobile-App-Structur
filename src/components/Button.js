import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";
import { MetricsSizes } from "../Utility/metrics";
import { useSelector, useDispatch } from "react-redux";

const Buton = (props) => {
  const { outlineButton } = props;
  const Organisation = useSelector((state) => state)?.auth?.organisation;
  return (
    <TouchableOpacity
      style={[
        outlineButton
          ? [
              styles.outlineButton,
              {
                borderColor:
                  Organisation?.Org_Color?.ConfigValue || colors.primary_500,
              },
            ]
          : [
              styles.button,
              {
                backgroundColor:
                  Organisation?.Org_Color?.ConfigValue || colors.primary_500,
              },
            ],
        { ...props.style },
      ]}
      {...props}
    >
      <Text
        style={[
          outlineButton
            ? [
                styles.outlineText,
                {
                  color:
                    Organisation?.Org_Color?.ConfigValue || colors.primary_500,
                },
              ]
            : styles.text,
          { ...props.textStyle },
        ]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: MetricsSizes.ms8,
    padding: MetricsSizes.ms10,
    alignItems: "center",
    marginHorizontal: MetricsSizes.hs24,
    marginVertical: MetricsSizes.vs10,
  },
  text: {
    fontSize: MetricsSizes.ms16,
    fontWeight: "500",
    color: colors.whiteColor,
  },
  outlineButton: {
    borderRadius: MetricsSizes.ms8,
    padding: MetricsSizes.ms10,
    borderWidth: MetricsSizes.ms1,
    alignItems: "center",
    marginHorizontal: MetricsSizes.hs24,
    marginVertical: MetricsSizes.vs10,
  },
  outlineText: {
    fontSize: MetricsSizes.ms16,
    fontWeight: "500",
  },
});

export default Buton;
