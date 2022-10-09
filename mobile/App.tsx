import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import theme from "./src/styles/theme";

import { MainStack } from "./src/stacks";

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar style="dark" translucent backgroundColor="transparent" />
        <MainStack />
      </ThemeProvider>
    </NavigationContainer>
  );
}
