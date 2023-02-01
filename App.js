import "react-native-gesture-handler";
import "react-native-reanimated";
import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Navigator from "./src/navigation/rootNavigator";

import Toast from "react-native-toast-message";


//constants
import store from "./src/shared/Store/store";
//



const App = () => {
  const navigationRef = useRef(null);
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Navigator navigationRef={navigationRef}></Navigator>
      </NavigationContainer>
      <Toast />
    </Provider>
  );
};
export default App;
