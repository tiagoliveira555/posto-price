import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Signin } from "../../screens/Signin";
import { Signup } from "../../screens/Signup";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signin"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};
