import React from "react";
import { Dimensions, Text, View, StyleSheet, ScrollView } from "react-native";
import Shimmer from "../../components/Shimmer";

const WIDTH = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    margin: 8,
  },
  avatar: { borderRadius: 30, width: 60, overflow: "hidden" },
  upperText: { marginLeft: 8, marginTop: 14 },
  lowerText: { marginLeft: 8, marginTop: 4 },
});

const ActivityListPlaceHolder = (props) => {
  const { loading } = props;
  return (
    <ScrollView>
      {loading && (
        <>
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.avatar}>
                <Shimmer width={60} height={60} />
              </View>
              <View>
                <View style={styles.upperText}>
                  <Shimmer width={200} height={14} />
                </View>
                <View style={styles.lowerText}>
                  <Shimmer width={120} height={14} />
                </View>
              </View>
            </View>
            <Shimmer width={WIDTH} height={140} />
          </View>
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.avatar}>
                <Shimmer width={60} height={60} />
              </View>
              <View>
                <View style={styles.upperText}>
                  <Shimmer width={200} height={14} />
                </View>
                <View style={styles.lowerText}>
                  <Shimmer width={120} height={14} />
                </View>
              </View>
            </View>
            <Shimmer width={WIDTH} height={140} />
          </View>
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.avatar}>
                <Shimmer width={60} height={60} />
              </View>
              <View>
                <View style={styles.upperText}>
                  <Shimmer width={200} height={14} />
                </View>
                <View style={styles.lowerText}>
                  <Shimmer width={120} height={14} />
                </View>
              </View>
            </View>
            <Shimmer width={WIDTH} height={140} />
          </View>
        </>
      )}
    </ScrollView>
  );
};
export default ActivityListPlaceHolder;
