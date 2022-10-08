import React from "react";
import { Logo } from "../../components/Logo";
import * as S from "./styles";

export const Preload = () => {
  return (
    <S.Container>
      <Logo />
      <S.LoadingIcon />
    </S.Container>
  );
};
