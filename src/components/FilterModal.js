import { useEffect, useState } from "react";
import {
  Modal,
  View,
  Pressable,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { endPoints } from "../constants/Environment";
import { addData, getAllData } from "../Utility/API";
import { FontAwesome, EvilIcons } from "@expo/vector-icons";
import images from "../constants/images";
import colors from "../constants/colors";
import { ShowMessage } from "./Toast";
import message from "../constants/message";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { MetricsSizes } from "../Utility/metrics";
import Checkbox from "expo-checkbox";
import { globalStyles } from "../constants/globalStyles";
import Buton from "./Button";

const user_image = MetricsSizes.ms40;

const FilterModal = (props) => {
  const { modal = false, setModal, selectedGroups } = props;

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    getGroups();
  }, []);
  const getGroups = () => {
    let url = `${endPoints.api.GET_GROUPS}?hideNews=Y`;
    getAllData(url)
      .then((response) => {
        if (response.statusCode == 200) {
          let updated = response?.data.map((item) => {
            return {
              ...item,
              checked: false,
            };
          });
          setGroups(updated);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleGroups = (selected) => {
    let updated = groups.map((item) => {
      if (item?.value === selected?.value) {
        item.checked = !item.checked;
      }
      return item;
    });
    setGroups([...updated]);
  };
  const Filter = () => {
    let selected = groups.filter((item) => {
      if (item.checked == true) {
        return item;
      }
    });
    let final = selected.map((item) => {
      return item.value;
    });
    selectedGroups(final);
    setModal(false);
  };
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={modal}
      onRequestClose={() => {
        setModal(false);
      }}
      statusBarTranslucent={true}
    >
      <View style={styles.constainer}>
        <Pressable
          style={styles.firstHalfContainer}
          onPress={() => setModal(false)}
        ></Pressable>
        <SafeAreaView style={styles.secondHalfContainer}>
          <Text style={styles.headerText}>Communities</Text>
          <ScrollView>
            {groups.map((item) => {
              return (
                <View style={styles.section}>
                  <Checkbox
                    style={styles.checkbox}
                    value={item?.checked}
                    onValueChange={() => handleGroups(item)}
                    color={item?.checked ? colors.primary_500 : undefined}
                  />
                  <Text style={styles.paragraph}>{item?.label}</Text>
                </View>
              );
            })}
          </ScrollView>
          <Buton title="Filter" onPress={Filter} />
        </SafeAreaView>
      </View>
    </Modal>
  );
};
export default FilterModal;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  firstHalfContainer: {
    flex: 0.5,
  },
  secondHalfContainer: {
    flex: 0.5,
    backgroundColor: colors.whiteColor,
    borderTopLeftRadius: MetricsSizes.ms10,
    borderTopRightRadius: MetricsSizes.ms10,
  },
  headerText: {
    fontSize: MetricsSizes.ms18,
    margin: MetricsSizes.ms10,
    fontWeight: "400",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
