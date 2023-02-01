import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../constants/colors";
import { MetricsSizes } from "../Utility/metrics";

const DeleteModal = (props) => {
  const { isVisible, onClose, onDelete } = props;
  return (
    <Modal
      animationType={"slide"}
      transparent={true}
      visible={isVisible}
      onRequestClose={() => onClose(false)}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable style={styles.centeredView} onPress={() => onClose(false)}>
        <View style={styles.modalView}>
          <MaterialIcons
            name="delete"
            size={MetricsSizes.ms40}
            color={colors.error}
            style={{ alignSelf: "center" }}
          />
          <Text style={styles.modalText}>Are you sure you wish to delete?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  borderWidth: MetricsSizes.ms1,
                  borderColor: colors.primary_500,
                },
              ]}
              onPress={() => onClose(false)}
            >
              <Text style={[styles.buttonText, { color: colors.primary_500 }]}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: colors.error }]}
              onPress={onDelete}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};
export default DeleteModal;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modalView: {
    margin: MetricsSizes.ms20,
    backgroundColor: "white",
    borderRadius: MetricsSizes.ms12,
    paddingHorizontal: MetricsSizes.hs35,
    paddingVertical: MetricsSizes.vs25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginVertical: "2%",
    textAlign: "center",
    fontSize: MetricsSizes.ms16,
    fontWeight: "400",
    color: colors.gray_900,
  },
  boldText: {
    textAlign: "center",
    marginTop: "5%",
    fontSize: MetricsSizes.ms24,
    fontWeight: "700",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: MetricsSizes.vs10,
  },
  button: {
    width: MetricsSizes.hs80,
    height: MetricsSizes.vs48,
    alignItems: "center",
    borderRadius: MetricsSizes.ms8,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: MetricsSizes.ms16,
    fontWeight: "500",
    color: colors.whiteColor,
  },
});
