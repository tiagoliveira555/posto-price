import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Preload } from "../screens/Preload";
import { Signin } from "../screens/Signin";
import { Signup } from "../screens/Signup";
import { Home } from "../screens/Home";
import { Details } from "../screens/Details";

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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detais" component={Details} />
    </Stack.Navigator>
  );
};
