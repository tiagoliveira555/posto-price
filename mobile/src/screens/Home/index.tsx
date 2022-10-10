import React from "react";
import * as S from "./styles";

import logoPostoPrice from "../../assets/posto-price.png";

export const Home = () => {
  return (
    <S.Container>
      <S.AreaText>
        <S.UserNameText>Tiago, tudo bem?</S.UserNameText>
        <S.Subtitle>Encontre aqui os preços de combustíves.</S.Subtitle>
        <S.Logo source={logoPostoPrice} />
      </S.AreaText>
      <S.AreaMarkerContainer>
        <S.AreaMarker></S.AreaMarker>
      </S.AreaMarkerContainer>
    </S.Container>
  );
};
