import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../constants/colors";
import { MetricsSizes } from "../Utility/metrics";

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: this.props.index == 0 ? true : false,
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          ref={this.accordian}
          style={styles.row}
          onPress={() => this.toggleExpand()}
        >
          <Text style={styles.title}>{this.props.title}</Text>
          <AntDesign
            name={this.state.expanded ? "up" : "down"}
            size={MetricsSizes.ms18}
            color={colors.primary_500}
          />
        </TouchableOpacity>
        {this.state.expanded &&
          this.props.data.map((item) => {
            return (
              <View style={styles.child}>
                <Text style={styles.questionText}> Q. {item.Question}</Text>
                <Text style={styles.answerText}> A. {item.Answer}</Text>
              </View>
            );
          })}
      </View>
    );
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: MetricsSizes.ms16,
    fontWeight: "400",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: MetricsSizes.ms15,
    borderRadius: MetricsSizes.ms8,
    marginVertical: MetricsSizes.vs5,
    marginHorizontal: MetricsSizes.hs20,
    alignItems: "center",
    backgroundColor: colors.whiteColor,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: MetricsSizes.ms8,
    shadowOpacity: 0.1,
    elevation: 6,
  },
  child: {
    backgroundColor: colors.secondry_50,
    padding: MetricsSizes.ms15,
    marginHorizontal: MetricsSizes.hs20,
    borderLeftWidth: MetricsSizes.ms2,
    borderLeftColor: colors.secondry_500,
  },
  questionText: {
    color: colors.error,
    fontSize: MetricsSizes.ms16,
    fontWeight: "500",
    marginVertical: MetricsSizes.vs3,
  },
  answerText: {
    fontSize: MetricsSizes.ms14,
    fontWeight: "400",
    marginVertical: MetricsSizes.vs3,
  },
});
