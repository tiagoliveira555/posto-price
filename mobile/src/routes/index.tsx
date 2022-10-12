import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MainStack } from "./HomeStack";
import { AuthStack } from "./AuthStack";
import { useAuth } from "../hooks/useAuth";
import { Preload } from "../screens/Preload";

export const Routes = () => {
  const { authData, loading } = useAuth();

  if (loading) {
    return <Preload />;
  }

  return (
    <NavigationContainer>
      {authData ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
