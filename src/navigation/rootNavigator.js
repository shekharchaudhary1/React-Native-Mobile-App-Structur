import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import ForgotPassword from "../screens/ForgotPassword";
import SignUp from "../screens/SignUp";
import MyTabs from "./TabNavigator";
import colors from "../constants/colors";
import { MetricsSizes } from "../Utility/metrics";

const Stack = createNativeStackNavigator();
const rootnavigator = (props) => {

    return (
        <Stack.Navigator
            initialRouteName={"Login"}
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
                name="Login"
                component={Login}
                options={{ headerShown: false, animation: "slide_from_right" }}
            />

            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{ headerShown: false, animation: "slide_from_right" }}
            />

            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false, animation: "slide_from_right" }}
            />
            <Stack.Screen
                name="MyTabs"
                component={MyTabs}
                options={{ headerShown: false, animation: "slide_from_left" }}
                navigation={props.navigationRef}
            />
        </Stack.Navigator>
    );
}
export default rootnavigator;