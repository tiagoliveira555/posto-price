import React from "react";
import * as S from "./styles";

import { MaterialIcons } from "@expo/vector-icons";

export const TabBar = () => {
  return (
    <S.Container>
      <S.TabArea>
        <S.TabItem onPress={() => null}>
          <MaterialIcons name="search" size={30} color="#322153" />
        </S.TabItem>

        <S.AreaCenter>
          <S.TabItemCenter onPress={() => null}>
            <MaterialIcons name="local-gas-station" size={40} color="white" />
          </S.TabItemCenter>
        </S.AreaCenter>

        <S.TabItem onPress={() => null}>
          <MaterialIcons name="logout" size={30} color="#322153" />
        </S.TabItem>
      </S.TabArea>
    </S.Container>
  );
};
