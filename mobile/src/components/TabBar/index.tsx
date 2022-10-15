import React from "react";
import * as S from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

export const TabBar = () => {
  const { signOut } = useAuth();
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.TabArea>
        <S.TabItem onPress={() => null}>
          <MaterialIcons name="search" size={30} color="#322153" />
        </S.TabItem>

        <S.AreaCenter>
          <S.TabItemCenter onPress={() => navigation.navigate("Home")}>
            <MaterialIcons name="local-gas-station" size={40} color="white" />
          </S.TabItemCenter>
        </S.AreaCenter>

        <S.TabItem onPress={signOut}>
          <MaterialIcons name="logout" size={30} color="#322153" />
        </S.TabItem>
      </S.TabArea>
    </S.Container>
  );
};
