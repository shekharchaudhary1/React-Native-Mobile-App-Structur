
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, Platform } from "react-native";
import colors from "../constants/colors";
import images from "../constants/images";
import { MetricsSizes } from "../Utility/metrics";
import More from '../screens/More'
import Settings from '../screens/Settings'
const Stack = createNativeStackNavigator();
const MoreStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="More"
            screenOptions={{
                headerTitleAlign: "center",
                headerTintColor: colors.primary_500,
                headerTitleStyle: {
                    color: "black",
                    fontSize: MetricsSizes.ms18,
                    fontWeight: "600",
                },
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
                                marginTop: Platform.OS == "ios" ? -10 : 0,
                            }}
                        />
                    );
                },
            }}
        >
            <Stack.Screen
                name="More"
                component={More}
                options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{ animation: "slide_from_right", headerLeft: () => { } }}
            />
        </Stack.Navigator>
    );
};
export default MoreStack