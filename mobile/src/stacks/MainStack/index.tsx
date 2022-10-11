import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Preload } from "../../screens/Preload";
import { Signin } from "../../screens/Signin";
import { Signup } from "../../screens/Signup";
import { MainTab } from "../MainTab";

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signin"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
};
