import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import colors from "../constants/colors";
import { MetricsSizes } from "../Utility/metrics";

const Input = (props) => {
  const {
    style,
    editable = true,
    leftIcon,
    title,
    infoText,
    multiline,
    numberOfLines,
    onSubmitEditing,
  } = props;
  return (
    <View style={styles.Container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.subContainer}>
        {leftIcon}
        <TextInput
          style={[
            styles.input,
            {
              style,
              color: editable ? "black" : colors.gray_600,
            },
          ]}
          placeholderTextColor={colors.gray_600}
          {...props}
          multiline={multiline}
          numberOfLines={numberOfLines}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
      {infoText && <Text style={styles.infoText}>{infoText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    //margin: MetricsSizes.ms10,
  },
  subContainer: {
    flexDirection: "row",
    borderRadius: MetricsSizes.ms8,
    padding: MetricsSizes.ms10,
    alignItems: "center",
    borderWidth: MetricsSizes.ms1,
    borderColor: colors.gray_400,
    backgroundColor: colors.whiteColor,
  },
  input: {
    width: MetricsSizes.hs264,
    fontSize: MetricsSizes.ms18,
  },
  title: {
    color: colors.gray_900,
    fontSize: MetricsSizes.ms16,
    fontWeight: "500",
    marginVertical: MetricsSizes.vs10,
  },
  infoText: {
    color: colors.gray_600,
    fontSize: MetricsSizes.ms12,
  },
});

export default Input;
