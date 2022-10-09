import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import * as S from "./styles";

import { MaterialIcons } from "@expo/vector-icons";

export const TabBar = ({ navigation }: BottomTabBarProps) => {
  const goto = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <S.Container>
      <S.TabArea>
        <S.TabItem onPress={() => goto("Description")}>
          <MaterialIcons name="search" size={30} color="#322153" />
        </S.TabItem>

        <S.AreaCenter>
          <S.TabItemCenter onPress={() => goto("Home")}>
            <MaterialIcons name="local-gas-station" size={40} color="white" />
          </S.TabItemCenter>
        </S.AreaCenter>

        <S.TabItem onPress={() => goto("Description")}>
          <MaterialIcons name="logout" size={30} color="#322153" />
        </S.TabItem>
      </S.TabArea>
    </S.Container>
  );
};
