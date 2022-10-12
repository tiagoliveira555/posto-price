import React from "react";

import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import theme from "./src/styles/theme";

import { Routes } from "./src/routes";
import { AuthProvider } from "./src/contexts/authContext";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" translucent backgroundColor="#10DDBF" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
