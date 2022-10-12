import React from "react";
import * as S from "./styles";

import logoPostoPrice from "../../assets/posto-price.png";
import { TabBar } from "../../components/TabBar";

export const Home = () => {
  return (
    <S.Container>
      <S.AreaHeader>
        <S.Logo source={logoPostoPrice} />
        <S.AreaText>
          <S.UserNameText>Tiago, tudo bem?</S.UserNameText>
          <S.Subtitle>Encontre aqui os preços de combustíves.</S.Subtitle>
        </S.AreaText>
      </S.AreaHeader>
      <S.AreaMarkerContainer>
        <S.AreaMarker></S.AreaMarker>
      </S.AreaMarkerContainer>
      <TabBar />
    </S.Container>
  );
};
