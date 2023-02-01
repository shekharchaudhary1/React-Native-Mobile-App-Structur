import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, Platform } from "react-native";
import colors from "../constants/colors";
import images from "../constants/images";
import { MetricsSizes } from "../Utility/metrics";
import ResourceScreen from '../screens/Resources'
const Stack = createNativeStackNavigator();
const ResourceStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="ResourceScreen"
            screenOptions={{
                headerTitleAlign: "center",
                headerTintColor: colors.primary_500,
                headerTitleStyle: {
                    color: "black",
                    fontSize: MetricsSizes.ms18,
                    fontWeight: "600",
                },
            }}
        >
            <Stack.Screen
                name="ResourceScreen"
                component={ResourceScreen}
                options={{
                    animation: "slide_from_right",
                    headerTitle: "Resources",
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
            />
        </Stack.Navigator>
    );
};

export default ResourceStack;