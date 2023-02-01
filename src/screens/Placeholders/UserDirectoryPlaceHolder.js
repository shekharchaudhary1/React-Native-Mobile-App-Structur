import React from "react";
import { Dimensions, Text, View, StyleSheet, ScrollView } from "react-native";
import Shimmer from "../../components/Shimmer";
import { MetricsSizes } from "../../Utility/metrics";

const WIDTH = Dimensions.get("screen").width;
const avatar = 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: MetricsSizes.vs20,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    margin: MetricsSizes.ms8,
  },
  avatar: {
    height: avatar,
    width: avatar,
    borderRadius: avatar / 2,
    overflow: "hidden",
  },
  upperText: { justifyContent: "center", marginHorizontal: MetricsSizes.hs10 },
  lowerText: { marginLeft: MetricsSizes.hs8, marginTop: MetricsSizes.vs4 },
});

const UserDirectoryPlaceHolder = (props) => {
  const width60 = MetricsSizes.hs60;
  const width280 = MetricsSizes.hs280;
  const height60 = MetricsSizes.vs60;
  const height34 = MetricsSizes.vs36;
  const { loading } = props;
  return (
    <ScrollView>
      {loading && (
        <>
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.avatar}>
                <Shimmer width={width60} height={height60} />
              </View>
              <View style={styles.upperText}>
                <Shimmer width={width280} height={height34} />
              </View>
            </View>
            <View style={styles.header}>
              <View style={styles.avatar}>
                <Shimmer width={width60} height={height60} />
              </View>
              <View style={styles.upperText}>
                <Shimmer width={width280} height={height34} />
              </View>
            </View>
            <View style={styles.header}>
              <View style={styles.avatar}>
                <Shimmer width={width60} height={height60} />
              </View>
              <View style={styles.upperText}>
                <Shimmer width={width280} height={height34} />
              </View>
            </View>
            <View style={styles.header}>
              <View style={styles.avatar}>
                <Shimmer width={width60} height={height60} />
              </View>
              <View style={styles.upperText}>
                <Shimmer width={width280} height={height34} />
              </View>
            </View>
            <View style={styles.header}>
              <View style={styles.avatar}>
                <Shimmer width={width60} height={height60} />
              </View>
              <View style={styles.upperText}>
                <Shimmer width={width280} height={height34} />
              </View>
            </View>
            <View style={styles.header}>
              <View style={styles.avatar}>
                <Shimmer width={width60} height={height60} />
              </View>
              <View style={styles.upperText}>
                <Shimmer width={width280} height={height34} />
              </View>
            </View>
            <View style={styles.header}>
              <View style={styles.avatar}>
                <Shimmer width={width60} height={height60} />
              </View>
              <View style={styles.upperText}>
                <Shimmer width={width280} height={height34} />
              </View>
            </View>
            <View style={styles.header}>
              <View style={styles.avatar}>
                <Shimmer width={width60} height={height60} />
              </View>
              <View style={styles.upperText}>
                <Shimmer width={width280} height={height34} />
              </View>
            </View>
            <View style={styles.header}>
              <View style={styles.avatar}>
                <Shimmer width={width60} height={height60} />
              </View>
              <View style={styles.upperText}>
                <Shimmer width={width280} height={height34} />
              </View>
            </View>
            <View style={styles.header}>
              <View style={styles.avatar}>
                <Shimmer width={width60} height={height60} />
              </View>
              <View style={styles.upperText}>
                <Shimmer width={width280} height={height34} />
              </View>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};
export default UserDirectoryPlaceHolder;
