import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../../screens/Home";
import { TabBar } from "../../components/TabBar";
import { Description } from "../../screens/Description";

const Tab = createBottomTabNavigator();

export const MainTab = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Description" component={Description} />
    </Tab.Navigator>
  );
};
