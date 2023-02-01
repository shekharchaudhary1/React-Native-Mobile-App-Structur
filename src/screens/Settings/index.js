import React from "react";
import { FlatList } from "react-native-gesture-handler";
import IconButon from "../../components/IconButton";

const Settings = ({ navigation }) => {
  const data = [
    { Name: "Privacy", navigator: "" },
    { Name: "About Us", navigator: "" },
    { Name: "Ask Us", navigator: "" },
  ];

  const render = ({ item }) => {
    return (
      <IconButon
        title={item.Name}
        onPress={() => {
          navigation.navigate(item.navigator);
        }}
      />
    );
  };
  return <FlatList data={data} renderItem={render} />;
};
export default Settings;
