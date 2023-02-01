import React from "react";
import { StyleSheet, Text, View, Pressable, Modal, Image } from "react-native";
import colors from "../constants/colors";

const SuccessModal = (props) => {
  const { isVisible, message, onClose } = props;
  return (
    <Modal
      animationType={"fade"}
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
          <Image
            source={require("../assets/Done.png")}
            style={styles.image}
          ></Image>
          <Text style={styles.boldText}>Congrats!</Text>
          <Text style={styles.modalText}>{message}</Text>
        </View>
      </Pressable>
    </Modal>
  );
};
export default SuccessModal;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 35,
    paddingVertical: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    backgroundColor: colors.modal_gray,
    borderRadius: 80,
  },
  modalText: {
    marginVertical: "2%",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    color: colors.gray_900,
  },
  boldText: {
    textAlign: "center",
    marginTop: "5%",
    fontSize: 24,
    fontWeight: "700",
  },
});
