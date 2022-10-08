import React from "react";
import { Text } from "react-native";
import { Logo } from "../../components/Logo";
import * as S from "./styles";

export const Signin = () => {
  return (
    <S.Container>
      <Logo />
      <Text>Signin</Text>
    </S.Container>
  );
};
