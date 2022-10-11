import React from "react";
import { ButtonProps } from "react-native";

import * as S from "./styles";

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <S.CustomButton {...rest}>
      <S.CustomButtomText>{title}</S.CustomButtomText>
    </S.CustomButton>
  );
};
