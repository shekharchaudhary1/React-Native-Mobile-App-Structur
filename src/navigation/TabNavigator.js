import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import Home from "../screens/Home";
import MoreStack from "./MoreStack";
import ResourceStack from "./ResourceStack";
import UserDirectoryScreen from "../screens/UserDirectory";
import colors from "../constants/colors";
import { MetricsSizes } from "../Utility/metrics";
import images from "../constants/images";
const Tab = createBottomTabNavigator();
const MyTabs = (props) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.primary_500,
        tabBarInactiveTintColor: colors.gray_600,
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.whiteColor,
        },
        headerTitleStyle: {},
        tabBarStyle: {
          // height: MetricsSizes.vs70,
        },
        tabBarLabelStyle: {
          fontSize: MetricsSizes.ms12,
        },

        tabBarHideOnKeyboard: true,
        headerLeft: () => {
          return (
            <Image
              resizeMode="contain"
              resizeMethod="auto"
              source={{
                uri: images.rq_logo,
              }}
              style={{
                width: MetricsSizes.hs69,
                height: MetricsSizes.vs60,
                marginLeft: MetricsSizes.hs14,
              }}
            />
          );
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          headerTitle: "Homes",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name="home"
                size={MetricsSizes.ms22}
                color={focused ? colors.primary_500 : colors.gray_600}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Resources"
        component={ResourceStack}
        options={{
          unmountOnBlur: true,
          tabBarLabel: "Resources",
          headerTitle: "Resources",
          headerTitleAlign: "center",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="file-plus"
                size={MetricsSizes.ms22}
                color={focused ? colors.primary_500 : colors.gray_600}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="UserDirectoryScreen"
        component={UserDirectoryScreen}
        options={{
          tabBarLabel: "User",
          headerTitle: "User",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome5
                name="users"
                size={MetricsSizes.ms22}
                color={focused ? colors.primary_500 : colors.gray_600}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="More"
        component={MoreStack}
        options={{
          unmountOnBlur: true,
          tabBarLabel: "More",
          headerTitleAlign: "center",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name="more-horizontal"
                size={MetricsSizes.ms22}
                color={focused ? colors.primary_500 : colors.gray_600}
              />
            );
          },
          tabBarVisibilityAnimationConfig: "show",
        }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
